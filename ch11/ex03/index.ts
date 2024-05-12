export const littleToBig = (bytes: Uint32Array): Uint32Array => {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const resultValue = new ArrayBuffer(bytes.length * 4);
  const resultView = new DataView(resultValue);
  for (let i = 0; i < bytes.length; i++) {
    const int = view.getUint32(i * 4, true);
    resultView.setUint32(i * 4, int, false);
  }
  return new Uint32Array(resultValue);
};

export const BigToLittle = (bytes: Uint32Array): Uint32Array => {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const resultValue = new ArrayBuffer(bytes.length * 4);
  const resultView = new DataView(resultValue);
  for (let i = 0; i < bytes.length; i++) {
    const int = view.getUint32(i * 4, false);
    resultView.setUint32(i * 4, int, true);
  }
  return new Uint32Array(resultValue);
};
