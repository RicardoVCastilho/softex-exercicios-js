const produtos = [
    {id: 1, nome:"Camisa" },
    {id: 2, nome:"Calça" },
    {id: 3, nome:"Sandálias" },
]

function encontrarProdutoPorID(id) {
    const produtoEncontrado = produtos.find((produto) => produto.id == id);

    if(!produtoEncontrado) {
        return "Produto não pertence ao banco de dados"
    };

    return produtoEncontrado
};

console.log(encontrarProdutoPorID(1))