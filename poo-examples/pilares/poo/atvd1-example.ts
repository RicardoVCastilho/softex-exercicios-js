abstract class Instrumento {
    abstract name: string;
    tocarSom(): void { };

    cordas(): void {
        console.log("Seu instrumento tem cordas");
    }
}

class Violao extends Instrumento {
    name: string;
    tocarSom(): void {
        console.log("Violão está tocando");
    }
}

class Guitarra extends Instrumento {
    name: string;
    tocarSom(): void {
        console.log("Guitarra está tocando");
    }
}

const violao = new Violao();
violao.tocarSom();
violao.cordas();
console.log(violao);

const guitarra = new Guitarra();
guitarra.tocarSom();
guitarra.cordas();
console.log(guitarra);