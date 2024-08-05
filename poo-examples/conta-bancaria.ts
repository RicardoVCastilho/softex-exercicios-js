class ContaBancaria {
    tipoDeConta: string;
    saldo: number;

    constructor(tipoDeConta: string, saldo: number)
    {
        this.tipoDeConta = tipoDeConta;
        this.saldo = saldo;
    }
// método para mostrar saldo
    mostrarSaldo () {
        return `A conta ${this.tipoDeConta} contém o valor de ${this.saldo}`;
    }
// método para depositar
    depositar(valor:number) {
        console.log(`Você depositou ${valor}`);
        return this.saldo += valor;
    }
// método para sacar
    sacar(valor:number) {
        console.log(`Você sacou ${valor}`);
        return this.saldo -= valor;
    }

}

const conta = new ContaBancaria(`Salário`, 2000);

//retorna o tipo de conta
console.log(conta);

// retorna o saldo
console.log(conta.mostrarSaldo());

// retorna o depósito
conta.depositar(600);

// retorna o saque
conta.sacar(400);

