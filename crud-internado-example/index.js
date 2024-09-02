const {internado} = require("./src/database");
const {leitos} = require("./src/database");
const {addInternado} = require("./functions/add-internado");
const {addLeitos} = require("./functions/add-leito");
const {exibirInternado} = require("./functions/read-internado-leito");
const {exibirLeitos} = require("./functions/read-internado-leito");

addInternado('Leito-2', 'Luke', {
    quadroEvolucao:true,
    tipoDocumento:'Histórico',
    dataDoc:'02/09/2024', 
    nomeDoc:'Paciente: Leon, Tutor: Mateus, Histórico',
    descDoc: 'Este documento possui uma descrição'
});
exibirInternado();

addLeitos(8, 'Dipirona', true, '150mg', '3 vezes ao dia');
exibirLeitos();

