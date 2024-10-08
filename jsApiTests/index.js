fetch ("https://api.adviceslip.com/advice").then((data) => {
    return data.json();
}).then((data) => {
    console.log(data.slip.advice);
});

fetch ("https://api.funtranslations.com/translate/morse.json", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ text: "Hello World"})
})  
.then(response => response.json())
.then(data => console.log("Código Morse:", data.contents.translated))
.catch(console.error);



