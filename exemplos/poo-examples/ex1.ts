class Produto {
    //atributos da classe
    cod:number;
    tamanho:number;
    peso:number;
    marca:string;
    nome:string;
    cor:string;

    //construtor da classe
    constructor(
        cod:number, 
        tamanho:number, 
        peso:number, 
        marca:string, 
        nome:string, 
        cor:string
    ) {
        this.cod = cod;
        this.tamanho = tamanho;
        this.peso = peso;
        this.marca = marca;
        this.nome = nome;
        this.cor = cor;
    }

    mostrarNome() {
        return this.nome;

    }
}

//const produto1 = {}
const produto1 = new Produto(1, 2, 4, "vans", "Tênis da vans", "preto");

console.log(`O nome do produto é ${produto1.nome}`);
console.log(produto1.mostrarNome());