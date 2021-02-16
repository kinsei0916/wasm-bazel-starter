load("@rules_cc//cc:defs.bzl", "cc_binary", "cc_library")

cc_binary(
    name = "sample-wasm.js",
    srcs = ["sample.cc"],
    linkopts = [
        "--bind",
        "--pre-js './toolchain/emscripten_threaded_module_prejs.js'",
        "-s ASSERTIONS=1",
        "-s EXPORT_NAME=moduleFactory",
        "-s MALLOC=emmalloc",
        "-s MODULARIZE=1",
    ],
    deps = [
        ":sample",
    ],
)

## Library

cc_library(
    name = "sample",
    srcs = ["sample.cc"],
    hdrs = ["sample.h"],
    linkstatic = True,
    deps = [],
)
