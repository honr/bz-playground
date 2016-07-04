import 'goog:goog.soy';

import 'goog:r.greeter_soy';

export class Greeter {
  /** @param{string} name */
  constructor(name, numMarbles) {
    this.name_ = name;
  }

  /** @param{number} n
   *  @param{Array<string>} xs */
  greet(n, xs) {
    return goog.soy.renderElement(
      goog.global.document.body, r.greeter_soy.greet, {
        name: this.name_,
        numMarbles: n,
        xs: xs || [],
      });
  }

  /** @param{number} n */
  greetWorld(n) {
    return goog.soy.renderElement(
      goog.global.document.body, r.greeter_soy.greet, {
        name: 'World',
        numMarbles: n,
        xs: [],
      });
  }

  /****/
  updateName() {
    this.name_ = 'Kenny';
    this.greet(10, ['x']);
  }

  /****/
  run() {
    let xs = ['foo', 'bar', 'baz'];
    for (let x of [0, 1, 2]) {
      let t = x * 1000;
      if (x % 2 === 0) {
        window.setTimeout(() => this.greet(x, xs), t);
      } else {
        window.setTimeout(() => this.greetWorld(x), t);
      }
    }

    window.setTimeout(() => this.updateName(), 3000);
  }
}
