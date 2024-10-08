const axios = require("axios");

// axios.post("https://api.funtranslations.com/translate/morse.json", {
//     text: "Hello World"
// }) .then ((response) => {
//     console.log(response.data.contents.translated);
// });

axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
    console.log(response.data.value);
});

axios.get("https://api.kanye.rest/").then((response) => {
    console.log(response.data.quote);
});

axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`)
.then(response => {
    console.log(response.data);
});
