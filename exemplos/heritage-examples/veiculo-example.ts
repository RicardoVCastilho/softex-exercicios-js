class Veiculo {
    marca: string;
    modelo: string;
    ano: number;

    constructor (marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInfo() {
        console.log(`A marca do veículo é: ${this.marca}`);
        console.log(`O modelo do veículo é: ${this.modelo}`);
        console.log(`O ano de lançamento do veículo é: ${this.ano}`);
    }

}

const veiculo1 = new Veiculo ('Chevrollet', 'Onix', 2024 );

veiculo1.exibirInfo();

class Carro extends Veiculo {
    numeroDePortas: number;
    temVidroEletrico: string;

    constructor (marca: string, modelo: string, ano: number, numeroDePortas: number, temVidroEletrico: string) {
        super(marca, modelo, ano);
        this.numeroDePortas = numeroDePortas;
        this.temVidroEletrico = temVidroEletrico;
    }

    exibirInfo() {
        super.exibirInfo();
        console.log(`O número de portas do carro é: ${this.numeroDePortas}`);
        console.log(`O veículo tem vidros elétricos? ${this.temVidroEletrico}`);
    }
}

const carro1 = new Carro ('Fiat', 'Palio', 2024, 4, 'Yes');

carro1.exibirInfo();

class Moto extends Veiculo {
    tipoDeGuidao: string;
    conjuntoRodas: string;

    constructor (marca: string, modelo: string, ano: number, tipoDeGuidao: string, conjuntoRodas: string) {
        super(marca, modelo, ano);
        this.tipoDeGuidao = tipoDeGuidao;
        this.conjuntoRodas = conjuntoRodas;
    }

    exibirInfo() {
        super.exibirInfo ();
        console.log(`O tipo de guidão desta moto é: ${this.tipoDeGuidao}`);
        console.log(`A moto tem um novo conjunto de rodas? ${this.conjuntoRodas}`);
    }

}

const moto1 = new Moto ('Honda', 'Bros', 2024, 'Nxr Bros 160 Esd/edd 2024 Prata Original Honda', 'Yes');

moto1.exibirInfo();

