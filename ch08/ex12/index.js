// TODO: 改行がある場合の修正を後に行う
export const f = new Function(
  'str',
  `str = str.replace("\\\\n","");
  const args = str.match(/\\$\\d{1,2}/g);
  if(!args || args.length === 0){
    return () => {
      try {
        return Number(str)
      }catch(e){
        return str
      }
    }
  }; 
  const newStr = "return "+str;
  const func = new Function(...args, newStr);
  return func;`
);
