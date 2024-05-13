export async function retryWithExponentialBackoff(func, maxRetry, callback) {
  let result = await func();
  for (let i = 0; !result && i < maxRetry; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, i)));
    result = await func();
  }
  callback(result);
}
