# Resources directory.
package(
  default_visibility = ["//visibility:public"],
)

load("@io_bazel_rules_closure//closure:defs.bzl",
     "closure_js_library",
     "closure_js_binary",
     "closure_js_deps",
     "closure_js_test",
     "closure_js_template_library",
     "closure_java_template_library",
     "closure_css_library",
     "closure_css_binary",
     "closure_js_proto_library",
     "phantomjs_test",
)

closure_js_library(
  name = "main_js",
  srcs = ["main.js"],
  deps = [
    ":greeter_js",
    "@io_bazel_rules_closure//closure/library",
  ],
  language = "ECMASCRIPT6_STRICT",
)

closure_js_library(
  name = "greeter_js",
  srcs = ["greeter.js"],
  deps = [
    ":greeter_soy",
    "@io_bazel_rules_closure//closure/library",
  ],
  language = "ECMASCRIPT6_STRICT",
)

closure_js_template_library(
  name = "greeter_soy",
  srcs = ["greeter.soy"],
  deps = [
    ":marbles",
  ],
)

closure_js_template_library(
  name = "marbles",
  srcs = ["marbles.soy"],
)

closure_css_library(
  name = "main_css",
  srcs = ["main.css"],
)
