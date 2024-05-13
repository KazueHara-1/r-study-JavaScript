// ベースのURLbase、追加するクエリaddQuery、パスpathを持つオブジェクトを引数に取り、
// ベースのURLのパスとクエリを修正した文字列を返す関数modifyUrlを実装しなさい。

export const modifyUrl = (params) => {
  console.log(params);
  const url = new URL(params.base);
  if (params.addQuery) {
    const q = params.addQuery.map((query) => query.join('='));
    if (url.search) {
      url.search = url.search + '&' + q.join('&');
    } else {
      url.search = q.join('&');
    }
  }
  if (params.path) {
    url.pathname = params.path;
  }
  return url.href;
};
