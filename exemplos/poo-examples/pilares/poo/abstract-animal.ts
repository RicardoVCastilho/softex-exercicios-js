abstract class Beast {
  abstract name: string;
  abstract emitirSom(): void;

  mover(): void {
    console.log("O animal está se movendo");
  }
}

class Dog extends Animal {
  name: string;
  emitirSom(): void {
    console.log("O cachorro late");
  }
}

class Cat extends Animal {
  name: string;
  emitirSom(): void {
    console.log("O gato mia");
  }
}

const dog = new Dog();
dog.emitirSom();
dog.mover();

const cat = new Cat();
cat.emitirSom();
cat.mover();