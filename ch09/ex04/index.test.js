import { Attacker1, Attacker2, Wizard1, Wizard2 } from './index.js'; // ts でも可

describe('class', () => {
  test.each([
    [100, 200, 200, 300],
    [50, 80, 100, 130],
  ])('atk:%i, mgc:%i', (atk, mgc, atkP, wizP) => {
    const attacker = new Attacker1(atk);
    expect(attacker.attack()).toBe(atkP);
    const wizard = new Wizard1(atk, mgc);
    expect(wizard.attack()).toBe(wizP);
  });
});

describe('prototype', () => {
  test.each([
    [100, 200, 200, 300],
    [50, 80, 100, 130],
  ])('atk:%i, mgc:%i', (atk, mgc, atkP, wizP) => {
    const attacker = new Attacker2(atk);
    expect(attacker.attack()).toBe(atkP);
    const wizard = new Wizard2(atk, mgc);
    expect(wizard.attack()).toBe(wizP);
  });
});
