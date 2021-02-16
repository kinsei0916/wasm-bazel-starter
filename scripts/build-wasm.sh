#!/usr/bin/env bash

set -e

yarn bazel build -c opt //src/cc:sample-wasm.js --config=wasm
cp -f bazel-bin/src/cc/sample-wasm.js \
      bazel-bin/src/cc/sample-wasm.wasm \
      wasm-out/
