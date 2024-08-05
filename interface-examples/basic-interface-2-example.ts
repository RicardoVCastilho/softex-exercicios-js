interface Rectangle {
    width: number;
    height: number;
}

function getArea (rectangle: Rectangle): string {
    return `A área do retângulo é ${rectangle.height * rectangle.width}`;
}

const retangulo: Rectangle = {width: 13, height: 14};

console.log(getArea(retangulo))