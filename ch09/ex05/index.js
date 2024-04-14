// instanceofと等価な関数 instanceOf(object, constructor)を作成しなさい。 関数内部での instanceof の利用は不可。

// 作成した関数に対してテストを作成しなさい。 テストケースには少なくとも以下を含むこと。

//     多段に継承したクラスのインスタンスと基底クラスのコンストラクタを入力するケース
//     継承関係にないインスタンスとクラスのコンストラクタを入力するケース

export function instanceOf(object, constructor) {
  if (Object.getPrototypeOf(object) === constructor.prototype) {
    return true;
  } else if (Object.getPrototypeOf(object) === Object.prototype) {
    return false;
  } else {
    return instanceOf(Object.getPrototypeOf(object), constructor);
  }
}
