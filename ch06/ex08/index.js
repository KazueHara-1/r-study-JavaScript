export function restrict(target, template) {
  for (const prop in target) {
    if (!Object.prototype.hasOwnProperty.call(template, prop)) {
      delete target[prop];
    }
  }
  return target;
}

export function substract(target, ...sources) {
  for (const source of sources) {
    for (const prop in target) {
      if (Object.prototype.hasOwnProperty.call(source, prop)) {
        delete target[prop];
      }
    }
  }
  return target;
}
