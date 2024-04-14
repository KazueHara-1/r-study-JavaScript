export class C {
  #x = 42;

  getX() {
    return this.#x;
  }
}

export function FuncC() {
  let x = 42;

  function getX() {
    return x;
  }

  return getX;
}
