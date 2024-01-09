export function eq(a: unknown, b: unknown) {
  // 型変換
  let modifiedA = a;
  let modifiedB = b;
  if (a === true) {
    modifiedA = 1;
  }
  if (b === true) {
    modifiedB = 1;
  }
  if (a === false) {
    modifiedA = 0;
  }
  if (b === false) {
    modifiedB = 0;
  }
  if (a === "") {
    modifiedA = 0;
  }
  if (b === "") {
    modifiedB = 0;
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

  if (typeof modifiedA === "string" || typeof modifiedB === "string") {
    const stringValue = typeof modifiedA === "string" ? modifiedA : modifiedB;
    const nonStringValue =
      typeof modifiedA !== "string" ? modifiedA : modifiedB;
    if (stringValue === String(nonStringValue)) {
      return true;
    }
  }

  return false;
}

export function lte(a: unknown, b: unknown) {
  // TODO: ここを実装しなさい
  return false;
}
