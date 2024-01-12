export function eq(a: unknown, b: unknown) {
  // 型変換
  const changeType = (prop: unknown) => {
    if (prop === true) {
      return 1;
    } else if (prop === false || prop === '') {
      return 0;
    }
    return prop;
  };
  let modifiedA = changeType(a);
  let modifiedB = changeType(b);
  if (typeof a === 'object' && a !== null && a !== undefined) {
    modifiedA = a.valueOf();
  }
  if (typeof b === 'object' && b !== null && b !== undefined) {
    modifiedB = b.valueOf();
  }
  if (typeof modifiedA === 'object' && a !== null && a !== undefined) {
    modifiedA = true;
  }
  if (typeof modifiedB === 'object' && b !== null && b !== undefined) {
    modifiedB = true;
  }

  if (modifiedA === modifiedB) {
    return true;
  }
  if (modifiedA === null || modifiedB === null) {
    const nonNull = modifiedA !== null ? modifiedA : modifiedB;
    if (nonNull === undefined) {
      return true;
    }
  }

  if (typeof modifiedA === 'string' || typeof modifiedB === 'string') {
    const stringValue = typeof modifiedA === 'string' ? modifiedA : modifiedB;
    const nonStringValue =
      typeof modifiedA !== 'string' ? modifiedA : modifiedB;
    if (stringValue === String(nonStringValue)) {
      return true;
    }
  }

  return false;
}

export function lte(a: unknown, b: unknown) {
  //   。オペランドの一方がオブジェクトの場合、数値優先アルゴリズムを使ってオブジェ
  // クトを基本型値に変換します。ただし、オブジェクトから数値への変換とは異なり、数値優先アル
  // ゴリズムで返された基本型値は、数値には変換されません。
  if (typeof a === 'number' && typeof b === 'number') {
    if (a < b || a === b) {
      return true;
    }
    return false;
  }
  let modifiedA = a;
  let modifiedB = b;

  if (typeof a === 'string') {
    modifiedA = Number(a);
  }
  if (typeof b === 'string') {
    modifiedB = Number(b);
  }
  console.log(modifiedA);
  console.log(modifiedB);
  if (typeof modifiedA === 'number' && typeof modifiedB === 'number') {
    if (modifiedA < modifiedB || modifiedA === modifiedB) {
      return true;
    }
  }
  return false;
}
