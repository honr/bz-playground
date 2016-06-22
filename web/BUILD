load('@io_bazel_rules_closure//closure:defs.bzl',
     'closure_js_library',
     'closure_js_binary',
     'closure_js_deps',
     'closure_js_test',
     'closure_js_template_library',
     'closure_java_template_library',
     'closure_css_library',
     'closure_css_binary',
     'closure_js_proto_library',
     'phantomjs_test',
)

load('@io_bazel_rules_go//go:def.bzl',
     'go_library',
     'go_binary',
     'go_test',
)

proto_library(
  name = 'foo_proto',
  srcs = ['foo.proto'],
)

closure_js_library(
  name = 'bar_js',
  srcs = ['bar.js'],
  deps = [
    # ':foo_proto',
  ],
)

closure_js_library(
  name = 'util',
  srcs = ['util.js'],
  language = 'ECMASCRIPT6_TYPED',
  deps = [
    '@io_bazel_rules_closure//closure/library',
  ],
)

closure_js_test(
  name = 'util_test',
  srcs = ['util_test.js'],
  deps = [
    ':util',
    '@io_bazel_rules_closure//closure/library',
    '@io_bazel_rules_closure//closure/library:testing',
  ],
  # size = 'small',
  pedantic = False,
  language = 'ECMASCRIPT6_TYPED',
)

# closure_js_library(
#   name = 'externs',
#   externs = ['externs.js'],
# )

closure_js_library(
  name = 'main',
  srcs = ['main.js'],
  deps = [
    ':util',
    # ':externs',
  ],
  language = 'ECMASCRIPT6_TYPED',
)

closure_js_binary(
  name = 'script',
  deps = [':main'],
  language = 'ECMASCRIPT5_STRICT',
  pedantic = True,
  entry_points = ['web/main'],
  defs = [
    '--charset=UTF-8',
    '--new_type_inf',
    # '--property_renaming=OFF',
  ],
)

closure_js_library(
  name = 'greeter',
  srcs = ['greeter.js'],
  language = 'ECMASCRIPT6_TYPED',
)

closure_js_library(
  name = 'faa',
  srcs = ['faa.js'],
  language = 'ECMASCRIPT6_TYPED',
  deps = [
    ':greeter',
    '@io_bazel_rules_closure//closure/library',
  ],
)

closure_js_binary(
  name = 'faa_bin',
  deps = [':faa'],
  language = 'ECMASCRIPT5_STRICT',
  pedantic = True,
  entry_points = ['web/faa'],
  # debug = True,
  defs = [
    # '--remove_dead_code=False',
    '--new_type_inf',
    # '--generate_exports',
    # '--export_local_property_definitions',
  ],
  # dependency_mode='LOOSE',
  # formatting = 'PRETTY_PRINT',
)

closure_js_binary(
  name = 'greeter_bin',
  deps = [':greeter'],
  language = 'ES5_STRICT',
  pedantic = True,
  entry_points = ['web/greeter'],
  # debug = True,
  formatting = 'PRETTY_PRINT',
)

closure_js_library(
  name = 'byer',
  srcs = ['byer.js'],
  language = 'ECMASCRIPT6_TYPED',
  # convention = 'GOOGLE',
  deps = [
    ':greeter',
  ],
)

closure_js_binary(
  name = 'greet',
  language = 'ES5_STRICT',
  deps = [
    ':greeter',
    ':byer',
  ],
  debug = True,
  pedantic = True,
  # entry_points = ['goog:h.u'],
  # entry_points = ['Hu'],
  # dependency_mode = 'STRICT',
  entry_points = [
    # 'web/greeter',
    'goog:byer',
  ],
)

closure_css_library(
  name = 'style_css',
  srcs = ['style.css'],
)

closure_css_binary(
  name = 'stylesheet',
  deps = [':style_css'],
)

go_binary(
  name = 'fe',
  srcs = ['fe.go'],
  deps = [
    '//github.com/honr/vulcan/htl:go_default_library',
    '//github.com/honr/vulcan/static:go_default_library',
  ],
  data = [
    ':stylesheet',
    ':script',
  ],
)
