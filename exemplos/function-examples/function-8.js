function ehVogal (letra) {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        return "É vogal sim!";
    }
    else {
        return "Não é vogal!";
    }
}

console.log (ehVogal("b"));