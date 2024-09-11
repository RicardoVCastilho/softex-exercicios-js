function verificarSinal(num: number): string {
    if(num > 0) {
        return "Positivo";
    }
    else if (num < 0) {
        return "Negativo";
    }
    else if(num == 0) {
        return "Zero";
    }
}

console.log(verificarSinal(-3));