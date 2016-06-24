import goog from 'goog:goog';

// Turns a hyphenated string to camel-case.
// For instance, "camel-case" -> "camelCase".
function toCamelCase(s: string): string {
  var cc = '';
  for (var part of s.split('-')) {
    if (part) {
      cc += part[0].toUpperCase() + part.substring(1);
    }
  }
  return cc;
}

// Returns the reference to the input Array-like.
function refToArray(x: IArrayLike): IArrayLike {
  return Array.prototype.slice.call(x, 0);
}

function getTemplates(): Object {
  var templateList = document.querySelectorAll('template');
  var m = Object.create(null);
  for (var i = 0, iMax = templateList.length; i < iMax; i++) {
    var template = templateList[i];
    m['new' + toCamelCase(template.id)] = function() {
      var node = document.importNode(template.content, true /* deep_clone */);
      return {node: node};
    };
  }
  return m;
}

// Template creator map.  The templates can be filled.
function getFillableTemplates = (function() {
  var m = Object.create(null);
  var templateFunctions = {};
  m.fns = templateFunctions;

  const registerSpot_templateRe = new RegExp('^{{(.*)}}$');
  var registerSpot = function(
    spots, nd, targetField, templateExpression, templateName) {
    var matches = templateExpression.match(registerSpot_templateRe);
    if (matches == null) {
      return false;
    }
    let [spotKey, fnName] = matches[1].split('|', 2);
    var fillSpot = function(value) {
      var f = m.fns[fnName];
      if (f) {
        value = f.call(this, value, templateName);
      }
      if (targetField === '') {
        nd.textContent = value;
      } else if (targetField.endsWith('?')) {
        if (value) {
          nd.setAttribute(targetField.slice(0, -1), '');
        }
      } else {
        nd.setAttribute(targetField, value);
      }
    };
    if (spotKey in spots) {
      spots[spotKey].push(fillSpot);
    } else {
      spots[spotKey] = [fillSpot];
    }
    return true;
  };

  document.querySelectorAll('template').forEach(function(tpl) {
    m['new' + toCamelCase(tpl.id)] = function() {
      var node = document.importNode(tpl.content, true /* deep_clone */);
      var spots = Object.create(null);

      var nodeIterator = document.createNodeIterator(
        node, NodeFilter.SHOW_ELEMENT, function() {
          return NodeFilter.FILTER_ACCEPT;
        });
      var nd;
      while (nd = nodeIterator.nextNode()) {
        for (var kv of nd.attributes) {
          if (registerSpot(spots, nd, kv.name, kv.value, tpl.id)) {
            nd.removeAttribute(kv.name);
          }
        }
        if (registerSpot(spots, nd.childNodes[0], '', nd.textContent, tpl.id)) {
          nd.childNodes[0].textContent = '';
        }
      }

      return {
        node: node,
        fill: function(data) {
          for (var spotKey in data) {
            var oo = spots[spotKey];
            if (oo == null) {
              continue;
            }
            var v = data[spotKey];
            for (var f of oo) {
              f.call(null, v);
            }
          }
        },
      };
    };
  });
  return m;
})();

export class Util {
  constructor() {
    this.templates = getTemplates();
    this.toastsEl = document.querySelector('#toasts');
  }

  public toast(message: string) {
    var toastEntry = this.templates['newToast']();
    toastEntry.node.querySelector('div').textContent = message;
    var c: Array<HTMLElement> = Array.prototype.slice.call(
      toastEntry.node.childNodes, 0);
    setTimeout(function(el: HTMLElement) {
      el.classList.add('fade-out');
    }, 5000, c[0]);
    setTimeout(function(el: HTMLElement|null) {
      if (!goog.isDefAndNotNull(el)) {
        return;
      }
      el.parentNode.removeChild(el);
    }, 10000, c[0]);
    this.toastsEl.appendChild(toastEntry.node);
  }

  public fail(what: string, why: string, opt_details: Object) {
    var msg = '[FAILED ' + what + ']: ' + why;
    if (opt_details) {
      console.log(msg, opt_details);
    } else {
      console.log(msg);
    }
    this.toast(msg);
  }
}

export const U = new Util();
