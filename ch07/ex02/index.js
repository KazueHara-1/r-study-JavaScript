function fizzbuzz(n) {
  const array = [...Array(n)].map((_, i) => i);

  array.forEach((i) => {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  });
}

function sumOfSquaredDifference(f, g) {
  let result = 0;

  f.map((e, i) => (result += (e - g[i]) ** 2));
  return result;
}

function sumOfEvensIsLargerThan42(array) {
  let sum = 0;
  // for使わない
  array.forEach((element) => {
    if (element % 2 !== 0) {
      return;
    }
    sum += element;
    if (sum >= 42) {
      return true;
    }
  });
  return false;
}
