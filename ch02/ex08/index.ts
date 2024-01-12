export const removeSemicolon = (str: string) => {
  return str.replace(/;/g, "");
};

export const addSemicolon = (str: string) => {
  let returnStr = str;
  for (let i = 0; i < returnStr.length; i++) {
    if (
      returnStr[i] === "=" &&
      returnStr[i - 1] !== "!" &&
      returnStr[i + 1] !== "="
    ) {
      for (let j = i + 1; j < returnStr.length; j++) {
        if (returnStr[j] !== " ") {
          // 空白以外の文字が出るまで調べる
          if (j + 1 === returnStr.length) {
            returnStr =
              returnStr.slice(0, j + 1) + ";" + returnStr.slice(j + 1);
          } else {
            for (let k = j + 1; k < returnStr.length; k++) {
              if (returnStr[k] === "\n" || returnStr[k] === " ") {
                // 改行または空白なら;を入れる
                returnStr = returnStr.slice(0, k) + ";" + returnStr.slice(k);
                // セミコロンの次の文字を読む
                i = k + 1;
                break;
              }
            }
          }
          break;
        }
      }
    }
  }
  return returnStr;
};
