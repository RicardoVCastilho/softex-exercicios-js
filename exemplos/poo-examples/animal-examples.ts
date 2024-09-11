class Animal {
    nome: string;
    som: string;

constructor(nome:string,som: string)
{
    this.nome = nome;
    this.som = som;
}

fazerSom() {
    return this.som;
}

}

const cachorro = new Animal ("cachorro", "Au-au");
const gato = new Animal ("gato", "miau");

console.log(`O animal é ${cachorro.nome} e ele faz ${cachorro.som}`);
console.log(`O animal é o ${gato.nome} e ele faz ${gato.som}`);