// 以下の各関数を実装しなさい

// 日本語文字列の配列を受け取り、文字列中の大文字・小文字("つ"と"っ"等)、
// 濁点・半濁点("は"と"ば"と"ば"等)の違いを無視してソートする sortJapanese 関数

export const sortJapanese = (strArray: string[]) => {
  const str = [...strArray];
  const collator = new Intl.Collator('ja-JP', { sensitivity: 'base' }).compare;
  return str.sort(collator);
};

// Date オブジェクトを受け取り、令和6年4月2日 のように (和暦)y年m月d日 のフォーマットで
// 日付の文字列を返す toJapaneseDateString 関数
export const toJapaneseDateString = (date: Date) => {
  return Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
    dateStyle: 'long',
  })
    .format(date)
    .toString();
};
