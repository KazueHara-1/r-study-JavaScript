export const loggingProxy = (obj) => {
  const array = [];

  const handler = {
    get(target, propKey) {
      const func = target[propKey];
      return function (...args) {
        const result = func.apply(this, args);
        array.push({
          timestamp: Date.now(),
          methodName: propKey,
          param: args,
        });
        return result;
      };
    },
  };

  const proxy = new Proxy(obj, handler);
  return { proxy: proxy, array: array };
};
