import moduleFactory, { SampleWasmModule } from '../wasm-out/sample-wasm'
import wasmPath from '../wasm-out/sample-wasm.wasm'

let module!: SampleWasmModule

document.getElementById('add')?.addEventListener('click', () => {
  const sum = module.add(1, 2)
  console.log(sum)
})

document.getElementById('dot')?.addEventListener('click', () => {
  const len = 3
  const offset1 = module._malloc(len * 4)
  const offset2 = module._malloc(len * 4)
  write(new Float32Array([1, 2, 3]).buffer, offset1)
  write(new Float32Array([2, 3, 4]).buffer, offset2)

  const dot = module.dot(offset1, offset2, len)

  console.log(dot)

  module._free(offset1)
  module._free(offset2)
})

function write(value: ArrayBuffer, offset: number): void {
  module.HEAPU8.set(new Uint8Array(value), offset)
}

// function read(offset: number, length: number): ArrayBuffer {
//   return module.HEAPU8.slice(offset, offset + length)
// }

async function init(): Promise<void> {
  const moduleOverrides: Partial<SampleWasmModule> = {}

  moduleOverrides.locateFile = (url, scriptDirectory) => {
    if (url.endsWith('.wasm')) {
      return wasmPath
    }
    return scriptDirectory + url
  }

  module = await moduleFactory(moduleOverrides)
}

init()
