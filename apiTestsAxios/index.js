// Consumo da API de tradução para código morse com a biblioteca Axios: Working
const axios = require("axios");

axios.post("https://api.funtranslations.com/translate/morse.json", {
text: "Hello world"
}).then((response) => {
    console.log(response.data.contents.translated);
});

// Consumo da API de piadas com o Chucky Norris através da biblioteca Axios: Working
const axios = require("axios");

axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
    console.log(response.data.value);
});

// Consumo da API de citações (quotes) do Kanye West através da biblioteca Axios: Working
const axios = require("axios");

axios.get("https://api.kanye.rest/").then((response) => {
    console.log(response.data.quote);
});

// Consumo da API de geração de imagens de gatinhos através da biblioteca Axios: Working
const axios = require("axios");

axios .get("https://api.thecatapi.com/v1/images/search?]imit=10")
    .then(response => {
        console.log(response.data);
    })