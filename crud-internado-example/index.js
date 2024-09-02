const {internado} = require("./src/database");
const {leitos} = require("./src/database");
const {addInternado} = require("./functions/add-internado");
const {addLeitos} = require("./functions/add-leito");

console.log(internado);
console.log(leitos);

console.log(addInternado('Leito-2', 'Luke', ''));