import { CRLF_TO_LF, LF_TO_CRLF } from "./index.ts";

describe("改行コード変換テスト", () => {
  it("LF -> CR+LF", () => {
    expect(LF_TO_CRLF("\n a\n b\r\n c\n d\r\n")).toBe(
      "\r\n a\r\n b\r\n c\r\n d\r\n"
    );
  });
  it("CR+LF -> LF", () => {
    expect(CRLF_TO_LF("\r\n a\n b\r\n c\n d\r\n")).toBe("\n a\n b\n c\n d\n");
  });
});
