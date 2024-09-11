interface Produto {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
}

const produtos: Produto [] = [
    {id: 1, nome: "Produto 1", preco: 100, categoria:"Categoria 1"},
    {id: 2, nome: "Produto 2", preco: 200, categoria: "Categoria 2"},
];

console.log(produtos);

produtos.push ({id: 3, nome: "Produto 3", preco: 200, categoria: "Categoria 3"});

console.log(produtos);