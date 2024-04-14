// 以下の仕様に基づいて RPG の戦士クラスと魔力を持った戦士である魔法戦士クラスをそれぞれ class を使った記法と prototype を使った記法で実装しなさい。

// 仕様

//     戦士は攻撃力 atk フィールドを持つ
//     戦士は攻撃 attack メソッドを持つ
//     attack メソッドはそのインスタンスの atk の 2 倍の値をダメージとして返す
//     魔法戦士は戦士を継承する
//     魔法戦士は魔力 mgc フィールドを持つ
//     魔法戦士の attack は戦士としての attack の値にそのインスタンスの mgc の値を加算した値をダメージとして返す

export class Attacker1 {
  constructor(atk) {
    this.atk = atk;
  }
  attack() {
    return this.atk * 2;
  }
}

export class Wizard1 extends Attacker1 {
  constructor(atk, mgc) {
    super();
    this.atk = atk;
    this.mgc = mgc;
  }
  attack() {
    return this.atk + this.mgc;
  }
}

export function Attacker2(atk) {
  this.atk = atk;
}

Attacker2.prototype = {
  attack: function () {
    return this.atk * 2;
  },
};

export function Wizard2(atk, mgc) {
  this.atk = atk;
  this.mgc = mgc;
}

Wizard2.prototype = Object.create(Attacker2.prototype);

Wizard2.prototype.constructor = Wizard2;
Wizard2.prototype.attack = function () {
  return this.atk + this.mgc;
};
