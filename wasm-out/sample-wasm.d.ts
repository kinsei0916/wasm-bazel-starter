export interface SampleWasmModule extends EmscriptenModule {
  add(x: number, y: number)
  dot(ptr1: number, ptr2: number, length: number)
}

declare var moduleFactory: EmscriptenModuleFactory<SampleWasmModule>

export default moduleFactory
