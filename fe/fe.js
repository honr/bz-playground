import 'goog:goog.soy';

import 'goog:fe.soy_main';

export class Greeter {
  /** @param{string} name**/
  constructor(name) {
    this.name_ = name;
  }

  /****/
  greet() {
    goog.soy.renderElement(goog.global.document.body,
                           fe.soy_main.greet,
                           {name: this.name_});
  }
}

export var g = new Greeter('Justine');
g.greet();
