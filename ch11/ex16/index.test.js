import { retryWithExponentialBackoff } from './index';
import { jest } from '@jest/globals';

jest.useFakeTimers();
test('retryWithExponentialBackoff test', () => {
  const mockFunc = jest.fn();
  retryWithExponentialBackoff(() => true, 1, mockFunc);
  jest.runAllTimers();
  expect(mockFunc).toHaveBeenCalled();
});
