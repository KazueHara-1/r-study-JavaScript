export class IgnoreAccentPattern {
  constructor(glob) {
    this.glob = glob;
    const normalized = glob.toString().normalize("NFD");
    const regexpText = normalized
      .replace(/\/.$/, "")
      .replace(/\//g, "")
      .replace("?", "([^/])")
      .replace("*", "([^/]*)")
      .replace(/[\u0300-\u036f]/g, "");
    this.regexpText = regexpText;
  }
  [Symbol.search](s) {
    const normalized = s.normalize("NFD");
    const removedText = normalized.replace(/[\u0300-\u036f]/g, "");
    return removedText.search(new RegExp(this.regexpText, "u"));
  }
  [Symbol.match](s) {
    const normalized = s.normalize("NFD");
    const removedText = normalized.replace(/[\u0300-\u036f]/g, "");
    if (this.glob.flags) {
      return removedText.match(
        new RegExp(this.regexpText, `u${this.glob.flags}`)
      );
    } else {
      return removedText.match(new RegExp(this.regexpText, "u"));
    }
  }
}
