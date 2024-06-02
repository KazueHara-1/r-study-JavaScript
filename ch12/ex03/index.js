export function* counterGen() {
  let counter = 1;
  while (true) {
    try {
      yield counter++;
    } catch (e) {
      counter = 0;
    }
  }
}
