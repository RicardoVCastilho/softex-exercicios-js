const {internado} = require("../src/database");

function addInternado(leitos, paciente, documentos) {
    const newInternado = {
        leitos,
        paciente,
        documentos
    };

    internado.push(newInternado);
}

module.exports = {
    addInternado
}