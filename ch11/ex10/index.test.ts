import { getDateNumber, getLocalDay, getWeekdayNumber } from './index.ts';

describe('getDateNumber test', () => {
  test.each([
    [2023, 1, 31],
    [2023, 2, 28],
    [2024, 2, 29],
    [2024, 4, 30],
  ])('%d年%d月→%d日', (year, month, date) => {
    expect(getDateNumber(year, month)).toBe(date);
  });
});

describe('getWeekdayNumber test', () => {
  test.each([
    ['2024-01-01', '2024-01-03', 3],
    ['2024-01-01', '2024-01-10', 8],
    ['2024-01-07', '2024-01-21', 10],
    ['2024-01-28', '2024-02-14', 13],
    ['2024-02-01', '2024-03-06', 25],
  ])('%sから%s → %d日間', (startDate, endDate, expected) => {
    expect(getWeekdayNumber(startDate, endDate)).toBe(expected);
  });
});

describe('getLocalDay test', () => {
  test.each([
    ['2024-01-01', 'ja-JP', '月曜日'],
    ['2024-01-02', 'en-US', 'Tuesday'],
    ['2024-01-03', 'zh-CN', '星期三'],
    ['2024-01-04', 'ko-KR', '목요일'],
    ['2024-01-05', 'es-ES', 'viernes'],
  ])('%sの曜日 locale:%s → %s', (date, locale, expected) => {
    expect(getLocalDay(date, locale)).toBe(expected);
  });
});
