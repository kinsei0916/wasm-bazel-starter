#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#endif

#include <cstddef>
#include <cstdint>

#include "src/cc/sample.h"

namespace sample {

namespace wasm {

float add(const float x, const float y) {
  return x + y;
}

float dot(const uintptr_t ptr1, const uintptr_t ptr2, const size_t length) {
  const float* x = reinterpret_cast<float*>(ptr1);
  const float* y = reinterpret_cast<float*>(ptr2);

  float result = 0;

  for (size_t i = 0; i < length; ++i) {
    result += x[i] * y[i];
  }

  return result;
}

}  // namespace wasm

}  // namespace sample
