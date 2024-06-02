export function* getPrimeGen() {
  const MAX_ARRAY_INTEGER = 2 ^ (32 - 1); //  かなり重いです…
  const sieve = new Array(MAX_ARRAY_INTEGER).fill(true);
  sieve[0] = false; // 0
  sieve[1] = false; // 1

  for (let i = 2; ; i++) {
    if (sieve[i]) {
      yield i;
      for (let j = i * i; j < sieve.length; j += i) {
        sieve[j] = false;
      }
    }
  }
}
