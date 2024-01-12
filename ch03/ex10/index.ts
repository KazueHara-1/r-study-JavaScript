const sampleObject = {
  出席番号: 1,
  名前: "田中太郎",
  年齢: 15,
};

process.stdout.write("プロパティ名一覧：");
let propertyNames = "";
for (const key of Object.keys(sampleObject)) {
  if (propertyNames !== "") {
    propertyNames += ", ";
  }
  propertyNames += key;
}
console.log(propertyNames);

process.stdout.write("値一覧：");
let values = "";
for (const value of Object.values(sampleObject)) {
  if (values !== "") {
    values += ", ";
  }
  values += value;
}
console.log(values);
