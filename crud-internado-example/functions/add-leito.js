const {leitos} = require("../src/database");

function addLeitos(permanencia, medicamento, ministrado, dosagemMed, frequencia) {
    const newLeito = {
        permanencia,
        medicamento,
        ministrado,
        dosagemMed,
        frequencia  
    };

    leitos.push(newLeito);
}

module.exposts = {
    addLeitos
}