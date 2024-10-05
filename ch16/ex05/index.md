> 標準入力、標準出力、標準エラー出力、リダイレクト、パイプという単語について調べなさい

- 標準入力: キーボード等からプログラムへ入力されるデータ。
- 標準出力: プログラムから出力されるデータの出力先。
- 標準エラー出力: プログラムから出力されるエラーの出力先。
- リダイレクト: コマンドの出力先を別の出力先 (ファイルなど) に変更することができる仕組みのこと。
- パイプ: コマンドの出力を別のコマンドの入力として扱う仕組みのこと。

参考:

- https://envader.plus/course/1/scenario/1007
- https://tech-lab.sios.jp/archives/42701

> 以下のコードを cat.mjs というファイルに保存し、後述する実験の結果を予測し、実際に実験しなさい

予想を以下に書く。

| コマンド                                 | 予想                                                                             | 結果                                                                                                                                   |
| ---------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `node cat.mjs`                           | ユーザーからの入力を直接標準出力へ出力する。                                     | 予想と同じ。                                                                                                                           |
| `echo FOO \| node cat.mjs`               | fs.createReadStream("\|") となってしまうので、ReadStreamが作れずにエラーとなる。 | `stdin is not a tty` (対話モードにできない旨のエラー) と出力される。                                                                   |
| `node cat.mjs > output.txt`              | fs.createReadStream(">") となってしまうので、ReadStreamが作れずにエラーとなる。  | `stdin is not a tty` (対話モードにできない旨のエラー) と出力される。                                                                   |
| `node cat.mjs file`                      | `file` の内容が標準出力に出力される。                                            | 予想と同じ。                                                                                                                           |
| `node cat.mjs file > output.txt`         | `file` の内容が`output.txt`に出力される。                                        | `stdin is not a tty` (対話モードにできない旨のエラー) と出力される。 (`fs.createReadStream(file).pipe(process.stdout);` となるせい…？) |
| `node cat.mjs invalid-file > output.txt` | createReadStreamの引数が存在しないファイルなので、エラーとなる。                 | `stdin is not a tty` (対話モードにできない旨のエラー) と出力される。                                                                   |
| `node cat.mjs invalid-file 2> error.txt` | createReadStreamの引数が存在しないファイルなので、エラーとなる。                 | `Error: ENOENT: no such file or directory,...` と、エラーがコンソールに出力される。                                                    |
