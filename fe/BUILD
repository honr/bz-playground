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

load("@io_bazel_rules_go//go:def.bzl",
     "go_library",
     "go_binary",
     "go_test",
)

go_binary(
  name = "fe",
  srcs = ["fe.go"],
  deps = [
    "//github.com/honr/vulcan/htl:go_default_library",
    "//github.com/honr/vulcan/static:go_default_library",
  ],
  data = [
    ":style",
    ":script",
  ],
)

closure_js_binary(
  name = "script",
  deps = ["//fe/r:main_js"],
  # language = "ECMASCRIPT5_STRICT",
  pedantic = True,
  entry_points = ["fe/r/main"],
  defs = [
    "--charset=UTF-8",
    "--new_type_inf",
  ],
)

closure_css_binary(
  name = "style",
  deps = ["//fe/r:main_css"],
)
