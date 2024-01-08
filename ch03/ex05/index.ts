// 文字列中の改行コードを変換する関数とテストを作成しなさい。

// LF -> CR+LF
// CR+LF -> LF

export const LF_TO_CRLF = (str: string): string => {
  return str.replace(/(.*)\n/g, "$1\r\n").replace(/\r\r\n/g, "\r\n");
};

export const CRLF_TO_LF = (str: string): string => {
  return str.replace(/\r\n/g, "\n");
};
