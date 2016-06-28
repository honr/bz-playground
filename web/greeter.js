import 'goog:web.greeter_soy';
import 'goog:goog.soy';

export class Greeter {
  /** @param{string} name**/
  constructor(name) {
    this.name_ = name;
  }

  /** @param{string} name
      @return{string} */
  static sayBye(name) {
    return 'Bye ' + name;
  }

  /** @return{string} */
  static staticFunc() {
    return 'Greeter.static-function';
  }

  /****/
  greet() {
    goog.soy.renderElement(goog.global.document.body,
                           web.greeter_soy.greet,
                           {name: this.name_});
  }
}
