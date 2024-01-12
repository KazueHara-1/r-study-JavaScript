// Pointクラスは書籍から引用

export class Point {
  private _x: number;
  private _y: number;

  get x(): number {
    return this._x;
  }
  get y(): number {
    return this._y;
  }

  // ----------- ここから引用 -----------
  // クラス名は大文字から記述するのが慣習。
  constructor(_x: number, _y: number) {
    // 新しいインスタンスを初期化するコンストラクタ関数。
    this._x = _x; // thisキーワードで、初期化中のオブジェクトを参照できる。
    this._y = _y; // 関数の引数をオブジェクトのプロパティとして保存する。
  } // return文は必要ない。

  distance() {
    // 原点からの距離を計算するメソッド。
    return Math.sqrt(
      // _x² + _y² の平方根を返す。
      this._x * this._x + // thisが参照しているのは
        this._y * this._y // distanceメソッドが呼び出されているオブジェクト。
    );
  }
  // ----------- ここまで引用 -----------

  add(point: Point) {
    this._x += point._x;
    this._y += point._y;
    // 設問ではクラスを返せとは言っていないので今回は実装していませんが、以下の書き方の方が良い気がしました
    // return new Point(this._x + point._x, this._y + point._y);
  }
}
