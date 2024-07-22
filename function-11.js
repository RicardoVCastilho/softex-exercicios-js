function celsiusParaFahrenheit (celsius) {
    var fahren= celsius * 1.8 + 32;
    return fahren.toFixed(2) + " F";
}

console.log(celsiusParaFahrenheit(17));

//faren = celsius * 1.8 + 32