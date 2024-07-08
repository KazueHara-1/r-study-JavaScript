export class MyArrayLike {
  [Symbol.isConcatSpreadable] = true;
}

export class MyArray extends Array {
  constructor(items) {
    super(...items);
  }

  static get [Symbol.species]() {
    return MyArrayLike;
  }
  map(callback) {
    return super.map(callback);
  }
}
