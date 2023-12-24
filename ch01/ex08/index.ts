import * as fs from "fs";

class DefaultMap extends Map {
  private defaultValue: number;
  constructor(defaultValue: number) {
    super();
    this.defaultValue = defaultValue;
  }
  public get = (key: string) => {
    if (this.has(key)) {
      return super.get(key);
    }
    return this.defaultValue;
  };
}

class Histogram {
  private text: string;
  private letterCounts = new DefaultMap(0);
  private totalLetters = 0;

  constructor(text: string) {
    this.text = text;
  }

  private count = () => {
    const formattedText = this.text.replace(/\s/g, "");

    for (const char of formattedText) {
      const countNum = this.letterCounts.get(char);
      this.letterCounts.set(char, countNum + 1);
      this.totalLetters++;
    }
  };

  private toString = () => {
    const entries = [...this.letterCounts];

    entries.sort((char_1, char_2) => {
      if (char_1[1] === char_2[1]) {
        return char_1[0] < char_2[0] ? -1 : 1;
      } else {
        return char_2[1] - char_1[1];
      }
    });

    for (const entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100;
    }

    const printEntries = entries.filter((entry) => entry[1] >= 1);

    const linesEntries = printEntries.map(
      ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );
    return linesEntries.join("\n");
  };

  public makeHist = () => {
    this.count();
    return this.toString();
  };
}

// ここからmainプログラム

const fileContent = fs.readFileSync("ch01/ex08/tetsugaku_nyumon.txt", "utf8");

const hist = new Histogram(fileContent);

console.log(hist.makeHist());
