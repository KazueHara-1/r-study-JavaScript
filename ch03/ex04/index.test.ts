describe("sum", () => {
  it("💯のlengthが2であること", () => {
    expect("💯".length).toBe(2);
  });
  it("💯と\uD83D\uDCAFが同値であること", () => {
    expect("💯" === "\uD83D\uDCAF").toBe(true);
  });
  it("💯と\u{0001F4AF}が同値であること", () => {
    expect("💯" === "\u{0001F4AF}").toBe(true);
  });
});
