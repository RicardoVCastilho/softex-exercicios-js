const {internado} = require('../src/database');

function updateInternadoByNumeroLeitos(leitos, novoLeito) {
    internado[internado.indexOf(internado.find(internado => internado.leitos))].leitos = novoLeito;
};

function updateInternadoByPaciente(paciente, NovoPaciente) {
    internado[internado.indexOf(internado.find(internado => internado.paciente))].paciente = novoPaciente;
};

function updateInternadoByDocumentos(documentos, novoDocumento) {
    internado[internado.indexOf(internado.find(internado => internado.documentos))].documentos = novoDocumento;
};
