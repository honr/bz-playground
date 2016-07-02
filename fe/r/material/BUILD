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

closure_css_library(
  name = "material_css",
  srcs = ["material.css"],
)

closure_js_library(
  name = "material_js",
  srcs = ["material.js"],
  deps = [
    "@io_bazel_rules_closure//closure/library",
  ],
  language = "ECMASCRIPT5_STRICT",
)

closure_js_binary(
  name = "material",
  deps = [":material_js"],
  # language = "ECMASCRIPT5_STRICT",
  pedantic = True,
  entry_points = ["fe/r/material/material"],
  defs = [
    "--charset=UTF-8",
    "--new_type_inf",
  ],
)
