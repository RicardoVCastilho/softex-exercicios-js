const modules = require("./module.js");
const {user} = require("./database/db.js");
const frutas = require("./nomes-frutas.js");

modules.sayHello();
modules.sayMyName('Ricardo');
modules.cooking('Meth');

const upperUser = user.map((user) => {
    console.log(user.name.toUpperCase());
});

console.log(user);

console.log(frutas);