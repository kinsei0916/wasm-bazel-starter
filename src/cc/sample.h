#ifndef SAMPLE_H_
#define SAMPLE_H_

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#include <emscripten/bind.h>
#endif

#include <cstddef>
#include <cstdint>

namespace sample {

namespace wasm {

float add(const float x, const float y);

float dot(const uintptr_t ptr1, const uintptr_t ptr2, const size_t length);

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_BINDINGS(SampleWasm) {
  emscripten::function("add", &add);
  emscripten::function("dot", &dot);
}
#endif

}  // namespace wasm

}  // namespace sample

#endif  // SAMPLE_H_
