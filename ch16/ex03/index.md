> 用語AES、Base64を調べて記しなさい。

## AES

- Advanced Encryption Standard は、アメリカが2001年に標準暗号として定めた共通鍵暗号アルゴリズムである。アメリカ国立標準技術研究所が公募し、RijndaelがAESとして採用された。
- AESとは、無線LANなどの通信データの暗号化に用いられる暗号化アルゴリズムです。

- 128・192・256bitの中から鍵長を選んで利用可能
- 以下4種類の変換を行う

  - SubBytes
  - ShiftRows
  - MixColumns
  - AddRoundKey

https://it-trend.jp/encryption/article/64-0070

## Base64

- メールやその他バイナリーデータをテキストに置き換える場合によく使われるエンコード方式がBase64です。
  https://www.en-pc.jp/tech/base64/

### 変換手順

Base64変換の手順を以下に挙げる。

1. 元データを6ビットずつに分割する。（6ビットに満たない分は後ろに0を追加して6ビットにする）
2. 各6ビットの値を変換表を使って4文字ずつ変換する。
3. 4文字に足りない分は = 記号を後ろに追加する。

https://ja.wikipedia.org/wiki/Base64
