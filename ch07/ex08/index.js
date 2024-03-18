export const reverse = (str) => {
  const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });

  // 文字列をセグメントに分割する
  const segments = segmenter.segment(str);
  let returnStr = '';
  for (const seg of segments) {
    returnStr = seg.segment + returnStr;
  }
  return returnStr;
};
