export class TypeMap {
  constructor(key, value) {
    if (key === undefined) {
      this.keys = new Array();
      this.values = new Array();
    } else if (value instanceof key) {
      this.keys = new Array(key);
      this.values = new Array(value);
    } else if (wrapperClass(value) instanceof key) {
      this.keys = new Array(key);
      this.values = new Array(value);
    } else if (typeof value === 'symbol' && key === Symbol) {
      this.keys = new Array(key);
      this.values = new Array(value);
    } else {
      throw new Error();
    }
  }

  get(key) {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      return this.values[index];
    } else {
      return undefined;
    }
  }

  set(key, value) {
    if (value instanceof key) {
      this.keys.push(key);
      this.values.push(value);
    } else if (wrapperClass(value) instanceof key) {
      this.keys.push(key);
      this.values.push(value);
    } else if (typeof value === 'symbol' && key === Symbol) {
      this.keys.push(key);
      this.values.push(value);
    } else {
      throw new Error();
    }
  }
}

function wrapperClass(value) {
  switch (typeof value) {
    case 'string':
      return new String(value);
    case 'number':
      return new Number(value);
    case 'bigint':
      return new BigInt(value);
    case 'boolean':
      return new Boolean(value);
  }
}
