import { sortJapanese, toJapaneseDateString } from './index.ts';

describe('sortJapanese() test', () => {
  test.each([
    [
      ['あめんぼ', 'あかいな', 'あいうえお'],
      ['あいうえお', 'あかいな', 'あめんぼ'],
    ],
    [
      ['さばんなのどうぶつ', 'さはんなのおあしす'],
      ['さはんなのおあしす', 'さばんなのどうぶつ'],
    ],
    [
      ['おつかれさま', 'おっかない'],
      ['おっかない', 'おつかれさま'],
    ],
  ])('テスト', (before, expected) => {
    expect(sortJapanese(before)).toMatchObject(expected);
  });
});

describe('toJapaneseDateString() test', () => {
  test.each([
    ['1996-10-14', '平成8年10月14日'],
    ['2019-01-01', '平成31年1月1日'],
    ['2019-05-01', '令和元年5月1日'],
    ['2024-01-01', '令和6年1月1日'],
  ])('%s→%s', (date, expected) => {
    expect(toJapaneseDateString(new Date(date))).toBe(expected);
  });
});
