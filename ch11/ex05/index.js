const MAGIC_BYTE_LIST = [
  {
    type: 'PDF',
    magicByte: new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d]),
  },
  {
    type: 'ZIP',
    magicByte: new Uint8Array([0x50, 0x4b, 0x03, 0x04]),
  },
  {
    type: 'ZIP',
    magicByte: new Uint8Array([0x50, 0x4b, 0x05, 0x06]),
  },
  {
    type: 'ZIP',
    magicByte: new Uint8Array([0x50, 0x4b, 0x07, 0x08]),
  },
  {
    type: 'GIF',
    magicByte: new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x37, 0x61]),
  },
  {
    type: 'GIF',
    magicByte: new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x39, 0x61]),
  },
  {
    type: 'PNG',
    magicByte: new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  },
];

export const detectFileType = (data) => {
  let type = 'UNKNOWN';
  MAGIC_BYTE_LIST.forEach((typeInfo) => {
    const dataView = DataView(data);
    const typeInfoView = DataView(typeInfo.magicByte.buffer);
    for (let i = 0; i < typeInfo.magicByte.length; i++) {
      if (dataView.getUint8(i * 4) !== typeInfoView.getUint8(i * 4)) {
        return;
      }
    }
    type = typeInfo.type;
    return;
  });
  return type;
};
