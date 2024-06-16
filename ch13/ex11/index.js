export async function retryWithExponentialBackoff(func, maxRetry) {
  for (let i = 0; i < maxRetry; i++) {
    try {
      const result = await func();
      return result;
    } catch (err) {
      setTimeout(() => {}, 1000 * Math.pow(2, i));
    }
  }
  throw new Error("Retry num is exceeded.");
}
