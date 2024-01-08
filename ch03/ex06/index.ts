export function substring(str: string, indexStart: number, indexEnd?: number) {
  let returnStr = "";
  const nonNaNIndexStart = isNaN(indexStart) ? 0 : indexStart;
  const nonNaNIndexEnd =
    indexEnd !== undefined && isNaN(indexEnd) ? 0 : indexEnd;
  const smallerNumber =
    nonNaNIndexEnd === undefined || nonNaNIndexStart < nonNaNIndexEnd
      ? nonNaNIndexStart
      : nonNaNIndexEnd;
  const biggerNumber =
    nonNaNIndexEnd === undefined || nonNaNIndexStart < nonNaNIndexEnd
      ? nonNaNIndexEnd
      : nonNaNIndexStart;
  const formatIndexStart = () => {
    if (smallerNumber < 0 || isNaN(smallerNumber)) {
      return 0;
    }
    if (str.length < smallerNumber) {
      return str.length;
    }
    return Math.trunc(smallerNumber);
  };
  const formattedIndexStart = formatIndexStart();
  const formattedIndexEnd =
    !biggerNumber || biggerNumber < 0 || str.length < biggerNumber
      ? str.length
      : Math.trunc(biggerNumber);
  for (let i = formattedIndexStart; i < formattedIndexEnd; i++) {
    returnStr += str[i];
  }
  return returnStr;
}

export function slice(str: string, indexStart?: number, indexEnd?: number) {
  let returnStr = "";
  if (indexStart === undefined) {
    return str;
  }
  if (indexEnd === undefined) {
    if (0 <= indexStart) {
      for (let i = indexStart; i < str.length; i++) {
        returnStr += str[i];
      }
    } else {
      for (
        let i = str.length + indexStart < 0 ? 0 : str.length + indexStart;
        i < str.length;
        i++
      ) {
        returnStr += str[i];
      }
    }
    return returnStr;
  }
  // indexEndがNaNなら""を返す
  if (isNaN(indexEnd)) {
    return "";
  }
  // indexStartがNaNなら0にする
  let formattedIndexStart = isNaN(indexStart) ? 0 : Math.trunc(indexStart);
  let formattedIndexEnd = isFinite(indexEnd)
    ? Math.trunc(indexEnd)
    : str.length;
  if (formattedIndexStart < 0) {
    formattedIndexStart = formattedIndexStart + str.length;
  }
  if (formattedIndexEnd < 0) {
    formattedIndexEnd = formattedIndexEnd + str.length;
  }
  if (str.length < formattedIndexEnd) {
    formattedIndexEnd = str.length;
  }
  for (let i = formattedIndexStart; i < formattedIndexEnd; i++) {
    returnStr += str[i];
  }
  return returnStr;
}

export function padStart(
  str: string,
  targetLength: number,
  padString?: string
) {
  if (padString) {
    let i = 0;
    let prefix = "";
    while (prefix.length + str.length < targetLength) {
      prefix = prefix + padString[i];
      i = (i + 1) % padString.length;
    }
    return prefix + str;
  }
  let returnStr = str;
  while (returnStr.length < targetLength) {
    returnStr = " " + returnStr;
  }
  return returnStr;
}

export function trim(str: string) {
  const calcTrimIndexStart = (str: string): number => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        return i;
      }
    }
    return str.length;
  };
  const calcTrimIndexEnd = (str: string): number => {
    for (let i = str.length - 1; 0 < i; i--) {
      if (str[i] !== " ") {
        return i + 1;
      }
    }
    return 0;
  };
  const trimIndexStart = calcTrimIndexStart(str);
  const trimIndexEnd = calcTrimIndexEnd(str);
  return slice(str, trimIndexStart, trimIndexEnd);
}
