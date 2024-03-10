export const addEscapeSequenceIf = (str: string) => {
  let newStr = str;
  if (str.includes("\0")) {
    newStr = newStr.replace(/\0/g, "\\0");
  }
  if (str.includes("\b")) {
    newStr = newStr.replace(/[\b]+/g, "\\b");
  }
  if (str.includes("\t")) {
    newStr = newStr.replace(/\t/g, "\\t");
  }
  if (str.includes("\n")) {
    newStr = newStr.replace(/\n/g, "\\n");
  }
  if (str.includes("\v")) {
    newStr = newStr.replace(/\v/g, "\\v");
  }
  if (str.includes("\f")) {
    newStr = newStr.replace(/\f/g, "\\f");
  }
  if (str.includes("\r")) {
    newStr = newStr.replace(/\r/g, "\\r");
  }
  if (str.includes('"')) {
    newStr = newStr.replace(/\"/g, '\\"');
  }
  if (str.includes("'")) {
    newStr = newStr.replace(/\'/g, "\\'");
  }
  return newStr;
};

export const addEscapeSequenceSwitch = (str: string) => {
    let newStr = str;
    for(const s of newStr){
        switch(s){
            case "\0":
                newStr = newStr.replace("\0", "\\0");
                break;
            case "\b":
                newStr = newStr.replace("\b", "\\b");
                break;
            case "\t":
                newStr = newStr.replace("\t", "\\t");
                break;
            case "\n":
                newStr = newStr.replace("\n", "\\n");
                break;
            case "\v":
                newStr = newStr.replace("\v", "\\v");
                break;
            case "\f":
                newStr = newStr.replace("\f", "\\f");
                break;
            case "\r":
                newStr = newStr.replace("\r", "\\r");
                break;
            case `\"`:
                newStr = newStr.replace(`\"`, `\\"`);
                break;
            case "\'":
                newStr = newStr.replace("\'", "\\'");
                break;
        }
    }
    
    return newStr;
  };
  