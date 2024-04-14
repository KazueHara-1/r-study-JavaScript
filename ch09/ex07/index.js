class Animal {
  eat() {
    console.log('eat');
  }
  makeSound() {
    console.log('makeSound');
  }
}

class Dog extends Animal {
  bite() {
    console.log('bite');
  }
}

class Fish {
  constructor() {
    this.eat = new Animal().eat;
  }
  swim() {
    console.log('swim');
  }
}

const dog = new Dog();
const fish = new Fish();

// fishはmakeSound()を持たない
dog.makeSound(); // makeSound
fish.makeSound(); // Error: fish.makeSound is not a function

// 固有メソッドも実行可能
dog.bite(); // bite
fish.swim(); // swim
