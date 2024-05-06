import { TypeMap } from '.';

describe('正常系', () => {
  test('string', () => {
    const typeMap = new TypeMap();
    typeMap.set(String, 'string');
    expect(typeMap.get(String)).toBe('string');
  });
  test('number', () => {
    const typeMap = new TypeMap();
    typeMap.set(Number, 123);
    expect(typeMap.get(Number)).toBe(123);
  });
  test('date', () => {
    const typeMap = new TypeMap();
    const mockDate = new Date('December 17, 1995 03:24:00');
    typeMap.set(Date, mockDate);
    expect(typeMap.get(Date)).toBe(mockDate);
  });
});

describe('異常系', () => {
  test('string→Numberでセット', () => {
    const typeMap = new TypeMap();
    expect(() => {
      typeMap.set(Number, 'string');
    }).toThrow();
  });
  test('date→stringでセット', () => {
    const typeMap = new TypeMap();
    const mockDate = new Date('December 17, 1995 03:24:00');
    expect(() => {
      typeMap.set(String, mockDate);
    }).toThrow();
  });
});
