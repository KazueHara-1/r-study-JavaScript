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
  // 型変換
  const changeType = (prop: unknown) => {
    if (prop === true) {
      return 1;
    } else if (prop === false || prop === '' || prop === null) {
      return 0;
    }
    return prop;
  };

  if (
    (typeof a === 'number' && typeof b === 'number') ||
    (typeof a === 'string' && typeof b === 'string') ||
    (typeof a === 'boolean' && typeof b === 'boolean')
  ) {
    if (a < b || a === b) {
      return true;
    }
    return false;
  }
  const modifiedA = changeType(a);
  const modifiedB = changeType(b);

  if (typeof modifiedA === 'number' && typeof modifiedB === 'number') {
    if (modifiedA < modifiedB || modifiedA === modifiedB) {
      return true;
    }
  }
  return false;
}
