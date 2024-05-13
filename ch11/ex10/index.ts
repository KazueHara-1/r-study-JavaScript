// 次の関数を実装しなさい。

// 特定の年と月(1-12)を数値の引数で受け取り、その月の日数を返す関数
export const getDateNumber = (year: number, month: number) => {
  const date = new Date(year, month);
  date.setDate(0);
  return date.getDate();
};
// 期間の開始日と終了日を'YYYY-MM-DD'形式の日付で二つ引数で受け取り、その期間(開始日と終了日を含む)の土日以外の日数を返す関数
export const getWeekdayNumber = (start: string, end: string) => {
  const SUNDAY = 0;
  const SATURDAY = 6;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diff = endDate.getTime() - startDate.getTime();
  let diffDate = Math.floor(diff / (24 * 60 * 60 * 1000)) + 1;
  if (startDate.getDay() === SUNDAY) {
    diffDate -= 1;
  } else if (startDate.getDay() === SATURDAY) {
    diffDate -= 2;
  }
  if (endDate.getDay() === SUNDAY) {
    diffDate -= 2;
  } else if (endDate.getDay() === SATURDAY) {
    diffDate -= 1;
  }
  diffDate -= Math.floor(diffDate / 7) * 2;
  return diffDate;
};
// 'YYYY-MM-DD'形式の日付とロケールを引数で受け取り、その日の曜日をロケールの形式の文字列で返す関数
export const getLocalDay = (date: string, locale: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(locale, {
    weekday: 'long',
  });
};

// ローカルのタイムゾーンにおいて先月 1 日 0 時 0 分 0 秒の Date オブジェクトを返す関数。
// ただし getMonth、setMonth は利用してはいけない。
export const getFirstDate = (date: string) => {
  const dateObj = new Date(date);
  // 前の月の最終日
  dateObj.setDate(0);
  // 前の月の最初の日
  dateObj.setDate(1);
  dateObj.setHours(0);
  dateObj.setMinutes(0);
  dateObj.setSeconds(0);
  return dateObj;
};
