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
      if (el.parentNode == null) {
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
