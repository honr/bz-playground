import 'goog:goog.asserts';
import 'goog:goog.testing.asserts';
import 'goog:goog.testing.jsunit';
import * as greeter from 'web/greeter';

function testGreet() {
  var gr = new greeter.Greeter('Justine');
  gr.greet();
  var body = document.body;
  goog.asserts.assert(body != null);
  assertHTMLEquals('<p>Hello <b>Justine</b>!', body.innerHTML);
}
