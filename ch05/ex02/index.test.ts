import { addEscapeSequenceIf } from "./index.ts";

describe("改行コード変換テスト if文", () => {
  it("\0→\\0", () => {
    expect(addEscapeSequenceIf("\0abc\0")).toBe("\\0abc\\0");
  });
  it("\b→\\b", () => {
    expect(addEscapeSequenceIf("\babc\b")).toBe("\\babc\\b");
  });
  it("\t→\\t", () => {
    expect(addEscapeSequenceIf("\tabc\t")).toBe("\\tabc\\t");
  });
  it("\n→\\n", () => {
    expect(addEscapeSequenceIf("\nabc\n")).toBe("\\nabc\\n");
  });
  it("\v→\\v", () => {
    expect(addEscapeSequenceIf("\vabc\v")).toBe("\\vabc\\v");
  });
  it("\f→\\f", () => {
    expect(addEscapeSequenceIf("\fabc\f")).toBe("\\fabc\\f");
  });
  it("\r→\\r", () => {
    expect(addEscapeSequenceIf("\rabc\r")).toBe("\\rabc\\r");
  });
  it('\"→\\"', () => {
    expect(addEscapeSequenceIf('\"abc\"')).toBe('\\"abc\\"');
  });
  it("\'→\\'", () => {
    expect(addEscapeSequenceIf("\'abc\'")).toBe("\\'abc\\'");
  });
  it(`\0\b\t\n\v\f\r\"\'`, () => {
    expect(addEscapeSequenceIf(`\0\b\t\n\v\f\r\"\'`)).toBe(`\\0\\b\\t\\n\\v\\f\\r\\"\\'`);
  });
});

describe("改行コード変換テスト switch文", () => {
    it("\0→\\0", () => {
      expect(addEscapeSequenceIf("\0abc\0")).toBe("\\0abc\\0");
    });
    it("\b→\\b", () => {
      expect(addEscapeSequenceIf("\babc\b")).toBe("\\babc\\b");
    });
    it("\t→\\t", () => {
      expect(addEscapeSequenceIf("\tabc\t")).toBe("\\tabc\\t");
    });
    it("\n→\\n", () => {
      expect(addEscapeSequenceIf("\nabc\n")).toBe("\\nabc\\n");
    });
    it("\v→\\v", () => {
      expect(addEscapeSequenceIf("\vabc\v")).toBe("\\vabc\\v");
    });
    it("\f→\\f", () => {
      expect(addEscapeSequenceIf("\fabc\f")).toBe("\\fabc\\f");
    });
    it("\r→\\r", () => {
      expect(addEscapeSequenceIf("\rabc\r")).toBe("\\rabc\\r");
    });
    it('\"→\\"', () => {
      expect(addEscapeSequenceIf('\"abc\"')).toBe('\\"abc\\"');
    });
    it("\'→\\'", () => {
      expect(addEscapeSequenceIf("\'abc\'")).toBe("\\'abc\\'");
    });
    it(`\0\b\t\n\v\f\r\"\'`, () => {
      expect(addEscapeSequenceIf(`\0\b\t\n\v\f\r\"\'`)).toBe(`\\0\\b\\t\\n\\v\\f\\r\\"\\'`);
    });
  });