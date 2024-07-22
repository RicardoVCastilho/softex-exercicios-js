function verificarMaioridade (idade) {
    if (idade >= 18) {
        return "Maior de idade";
    }
    else {
        return "False";
    }
        
}

console.log(verificarMaioridade(17));