import { instanceOf } from './index.js'; // ts でも可

describe('instanceOfのテスト', () => {
  test('falseを返す', () => {
    class Car {
      constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
    }
    class Dummy {
      constructor() {}
    }
    const auto = new Car('Honda', 'Accord', 1998);
    expect(instanceOf(auto, Dummy)).toBe(false);
  });
  test('継承なし', () => {
    class Car {
      constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
    }
    const auto = new Car('Honda', 'Accord', 1998);
    expect(instanceOf(auto, Car)).toBe(true);
  });
  test('継承1回', () => {
    class Car {
      constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
    }
    class Car2 extends Car {
      constructor(make, model, year) {
        super(make, model, year);
      }
    }
    const auto = new Car2('Honda', 'Accord', 1998);
    expect(instanceOf(auto, Car)).toBe(true);
    expect(instanceOf(auto, Car2)).toBe(true);
  });
  test('継承2回', () => {
    class Car {
      constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
    }
    class Car2 extends Car {
      constructor(make, model, year) {
        super(make, model, year);
      }
    }
    class Car3 extends Car2 {
      constructor(make, model, year) {
        super(make, model, year);
      }
    }
    const auto = new Car3('Honda', 'Accord', 1998);
    expect(instanceOf(auto, Car)).toBe(true);
    expect(instanceOf(auto, Car2)).toBe(true);
    expect(instanceOf(auto, Car3)).toBe(true);
  });
});
