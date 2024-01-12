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

class WordHistogram {
  private text: string;
  private wordCounts = new DefaultMap(0);
  private totalWords = 0;

  constructor(text: string) {
    this.text = text;
  }

  private count = () => {
    const matches = this.text.toLowerCase().matchAll(/\w+|\$[\d.]+|\S+/g);
    const words = [...matches].map((r) => r[0]);

    for (const word of words) {
      const countNum = this.wordCounts.get(word);
      this.wordCounts.set(word, countNum + 1);
      this.totalWords++;
    }
  };

  private toString = () => {
    const entries = [...this.wordCounts];

    entries.sort((char_1, char_2) => {
      if (char_1[1] === char_2[1]) {
        return char_1[0] < char_2[0] ? -1 : 1;
      } else {
        return char_2[1] - char_1[1];
      }
    });

    for (const entry of entries) {
      entry[1] = (entry[1] / this.totalWords) * 100;
    }

    // 出現頻度 0.5% 以上を取得
    const printEntries: [string, number][] = entries.filter(
      (entry) => entry[1] >= 0.5
    );

    const lines = printEntries.map(
      ([l, n]) =>
        `${l.padStart(10)}: ${"#".repeat(Math.round(10 * n))} ${n.toFixed(2)}%`
    );
    return lines.join("\n");
  };

  public makeHist = () => {
    this.count();
    return this.toString();
  };
}

// ここからmainプログラム

const fileContent = fs.readFileSync(
  "ch01/ex09/hamlet_TXT_FolgerShakespeare.txt",
  "utf8"
);

const hist = new WordHistogram(fileContent);

console.log(hist.makeHist());
