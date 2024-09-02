const {leitos} = require("../src/database");

function addLeitos(numLeito, permanencia, medicamento, ministrado, dosagemMed, frequencia) {
    const newLeito = {
        numLeito,
        permanencia,
        medicamento,
        ministrado,
        dosagemMed,
        frequencia  
    };

    leitos.push(newLeito);
}

module.exports = {
    addLeitos
}