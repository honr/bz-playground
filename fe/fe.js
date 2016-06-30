import 'goog:goog.soy';

import 'goog:fe.soy_main';

export class Greeter {
  /** @param{string} name */
  constructor(name) {
    this.name_ = name;
  }

  /****/
  greet() {
    console.log('this.name_: ' + this.name_);
    return goog.soy.renderElement(
      goog.global.document.body, fe.soy_main.greet, {
        name: this.name_,
      });
  }

  /****/
  greetWorld() {
    return goog.soy.renderElement(
      goog.global.document.body, fe.soy_main.greet, {
        name: 'World',
      });
  }

  /****/
  run() {
    // this.greet();
    let g1 = this.greet.bind(this);
    let g2 = this.greetWorld.bind(this);
    for (let x of [0, 1, 2, 3, 4, 5]) {
      let t = x * 1000;
      let f = (x % 2 === 0) ? g1 : g2;
      window.setTimeout(f, t);
    }
  }
}

new Greeter('Justine').run();
