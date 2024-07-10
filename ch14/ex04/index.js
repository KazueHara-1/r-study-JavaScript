export class Hiragana {
  constructor(c) {
    this.hiragana = c;
    this.utf16 = c.charCodeAt();
  }
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return this.utf16;
    }
    return this.hiragana;
  }
}
