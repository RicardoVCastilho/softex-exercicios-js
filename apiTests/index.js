// Conexão com API de conselhos através da biblioteca fetch: Working
fetch("https://api.adviceslip.com/advice").then((data) => {
    return data.json();
}).then((data) => {
    console.log(data.slip.advice);
});

// Conexão com API de traduções para código morse através da biblioteca fetch: Working
fetch("https://api.funtranslations.com/translate/morse.json", {
    method:"POST",
    headers: { "Content-type": "application/json"},
    body: JSON.stringify({ text: "Hello World"})
})

.then(response => response.json())
.then(data => console.log("Código Morse:", data.contents.translated))
.catch(console.error);

// Conexão com API de traduções para Alto Valiriano através da biblioteca fetch: Working
fetch("https://api.funtranslations.com/translate/valyrian.json", {
    method:"POST",
    headers: { "Content-type": "application/json"},
    body: JSON.stringify({ text: "All men must die, all men must serve" })
})

.then(response => response.json())
.then(data => console.log("High Valyrian:", data.contents.translated))
.catch(console.error)