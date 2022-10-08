async function init() {
    const response = await fetch("test.wasm");
    const buffer = await response.arrayBuffer();
    const wasm = await WebAssembly.instantiate(buffer);
    const sumFunction = wasm.instance.exports.sum;
    alert(sumFunction(45, 24));
}
init();
