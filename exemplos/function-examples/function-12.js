function agruparPorFaixaEtaria(pessoas) {
    const faixasEtarias = {
        crianca: [ ],
        adolescente: [ ],
        adulto: [ ],
        idoso: [ ]
    };

    pessoas.forEach(pessoa => {
        if (pessoa.idade >= 0 && pessoa.idade <= 12) {
            faixasEtarias.crianca.push(pessoa.nome);
        }
        else if (pessoa.idade >= 13 && pessoa.idade <= 17) {
            faixasEtarias.adolescente.push(pessoa.nome);
        }
        else if (pessoa.idade >= 18 && pessoa.idade <= 64) {
            faixasEtarias.adulto.push(pessoa.nome);
        }
        else if (pessoa.idade >= 65) {
            faixasEtarias.idoso.push(pessoa.nome);
        }
    });

    return faixasEtarias;
}

    const pessoas = [
        { nome: 'Lucio' , idade: 11 },
        { nome: 'John' , idade: 16 },
        { nome: 'Mary' , idade: 31 },
        { nome: 'Charles' , idade: 71 },
        { nome: 'Bea' , idade: 17 },
        { nome: 'Peter' , idade: 50 },
        { nome: 'Julie' , idade: 8 },
        { nome: 'Ferdinand' , idade: 66 }
    ];

    const resultado = agruparPorFaixaEtaria(pessoas);
    console.log(resultado);
