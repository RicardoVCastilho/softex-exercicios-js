class iPessoa {
    private nome: string;
    public idade: number;

    constructor (nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    private setNome(nome: string): void {
        this.nome = nome;
    }

    private setIdade(idade:number): number {
        return (this.idade = idade);
    }

    public alterarNome(novoNome: string): void {
        this.setNome(novoNome);
    }

    public alterarIdade(novaIdade: number): number {
        return this.setIdade(novaIdade);
    }
}

const pessoa = new iPessoa("Ricardo", 21);

console.log(pessoa.idade);
console.log(pessoa.alterarNome("Luana"));
console.log(pessoa.alterarIdade(20));


