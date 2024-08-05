interface Person {
    name: string;
    age: number;
}


function sayHello (person: Person): string {
    return `Olá, ${person.name}! Você tem ${person.age} anos`;
}

const pessoa:Person = {name:"Ricardo", age: 21};

console.log(sayHello(pessoa))