class Pessoa {
    cpf: number;
    nome: string;
    sexo: string;;
    idade: number;

constructor (
    cpf: number,
    nome: string,
    sexo: string,
    idade: number,
) {
    this.cpf = cpf;
    this.nome = nome;
    this.sexo = sexo;
    this.idade = idade;
}

apresentar() {
    return this.nome;
}

}

const pessoa1 = new Pessoa(11777922496, "Ricardo Vitor", "Masculino", 21);

console.log(`Olá! Meu nome é ${pessoa1.nome}`);
console.log(`Minha idade é ${pessoa1.idade}`);