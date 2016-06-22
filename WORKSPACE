git_repository(
  name = "io_bazel_rules_closure",
  remote = "https://github.com/bazelbuild/rules_closure.git",
  tag = "0.2.1",
)
load("@io_bazel_rules_closure//closure:defs.bzl",
     "closure_repositories",
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
closure_repositories()

git_repository(
  name = "io_bazel_rules_go",
  remote = "https://github.com/bazelbuild/rules_go.git",
  tag = "0.0.2",
)
load("@io_bazel_rules_go//go:def.bzl",
     "go_repositories",
     "go_prefix",
     "go_binary",
     "go_library",
     "go_test",
)
go_repositories()
