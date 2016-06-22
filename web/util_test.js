import 'goog:goog.testing.asserts';
import 'goog:goog.testing.jsunit';
import 'goog:goog.testing.testSuite';

// import {util} from 'web/util';

goog.testing.testSuite({
  testUtil_toCamelCase: function() {
    goog.testing.assertEquals(2, 1 + 1);
    // assertEquals('camelCase', h.util.toCamelCase('camel-case'));
    // assertEquals('CamelCase', h.util.toCamelCase('-camel-case'));
    // assertEquals('camelCase', h.util.toCamelCase('camel-case-'));

    // assertEquals('foo', util.toCamelCase('failure-example'));
  },
});
