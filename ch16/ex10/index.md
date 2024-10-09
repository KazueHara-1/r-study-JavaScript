また大きな file.txt に対し fs.createReadStream を利用した場合と fs.read を利用した場合でメモリ使用量がどれだけ違うか確認しなさい。

- fs.createReadStream: 30~40%
- fs.readFileSync: 80%程の使用率
