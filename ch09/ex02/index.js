export class C {
  static counter = 0;
  get x() {
    return C.counter++;
  }
}
