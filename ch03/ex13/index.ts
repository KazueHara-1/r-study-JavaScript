class Example {
  value = [1, 2, 3];

  valueOf() {
    return this.value;
  }

  toString() {
    let returnValue = "";
    for (let i = 0; i < this.value.length; i++) {
      returnValue += this.value[i];
      if (i !== this.value.length - 1) {
        returnValue += ",";
      }
    }
    return returnValue;
  }
}

const obj = new Example();

console.log(obj.value);

obj.value.map((v) => {
  console.log(v);
});
