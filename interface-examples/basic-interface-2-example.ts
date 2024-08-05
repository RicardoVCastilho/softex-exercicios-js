interface Rectangle {
    width: number;
    height: number;
}

function getArea (area: Rectangle): string {
    return `A área do retângulo é ${area.height * area.width} metros quadrados`;
}

const retangulo: Rectangle = {width: 13, height: 14};

console.log(getArea(retangulo))