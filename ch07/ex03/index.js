// reduce を使って関数 (sum, join, reverse, every, some) を実装しなさい。

export const sum = (array) => {
  if (!array) {
    return 0;
  }
  return array.reduce((x, y) => x + y, 0);
};

export const join = (array, separator = ',') => {
  if (!array) {
    throw new Error();
  } else if (array.length === 0) {
    return '';
  } else {
    return array.reduce(
      (acc, current) => `${acc ?? ''}${separator}${current ?? ''}`
    );
  }
};

export const reverse = (array) => {
  return array.reduce((acc, current) => {
    if (acc.length === 0) {
      acc.push(current);
    } else {
      acc.unshift(current);
    }
    return acc;
  }, []);
};

export const every = (array, callback) => {
  return array.reduce(
    (acc, element, index, array) => acc && callback(element, index, array),
    true
  );
};

export const some = (array, callback) => {
  return array.reduce(
    (acc, element, index, array) => acc || callback(element, index, array),
    false
  );
};
