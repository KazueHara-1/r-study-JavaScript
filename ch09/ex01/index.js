export class C {
  static counter = 0;
  constructor() {
    this.C = C.C;
  }
  static C = class {
    static counter = 0;
    static method() {
      return ++C.counter;
    }
    method() {
      return ++this.constructor.counter;
    }
  };
  static method() {
    return ++this.counter;
  }
  method() {
    return ++C.counter;
  }
}
