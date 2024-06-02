function counterIter(max) {
  console.log("counterIter");
  let c = 1;
  return {
    [Symbol.iterator]() {
      console.log("counterIter: Symbol.iterator");
      return this;
    },
    next() {
      console.log("counterIter: next");
      if (c >= max + 1) {
        return { value: undefined, done: true };
      }
      const value = c;
      c++;
      return { value, done: false };
    },
    return(value) {
      console.log("counterIter: return:", value);
      return { value, done: true };
    },
    throw(e) {
      console.log("counterIter: throw:", e);
      throw e;
    },
  };
}

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/function*
// function* でジェネレーター関数を定義する

function* counterGen(max) {
  console.log("counterGen");
  try {
    for (let c = 1; c <= max; c++) {
      console.log("counterGen: next");
      yield c;
    }
  } catch (e) {
    console.log("counterGen: catch:", e);
  } finally {
    console.log("counterGen: finally");
  }
}

const counter = counterIter(2);

console.log(counter.next());
console.log(counter.next());
console.log(counter.next());

// counterIter
// counterIter: next
// { value: 1, done: false }
// counterIter: next
// { value: 2, done: false }
// counterIter: next
// { value: undefined, done: true }

const counterGenerated = counterGen(2);

console.log(counterGenerated.next().value);
console.log(counterGenerated.next().value);
console.log(counterGenerated.next().value);
console.log(counterGenerated.next().value);

// counterGen
// counterGen: next
// 1
// counterGen: next
// 2
// counterGen: finally
// undefined
// undefined
