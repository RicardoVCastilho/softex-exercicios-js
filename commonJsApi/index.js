// para importar o express
const express = require('express');

// para iniciar o express
const app = express();

const {clients} = require('./src/models/clients');

// renderizando a lista de clientes na rota raiz utilizando o  método send e verbo HTTP GET
app.get('/clients', (req, res) => {
    res.send(clients);
});

// utilizando o método json do express para fazer o parse do body da requisição
app.use(express.json());

// rota raiz
app.get('/', (req, res) => {
    res.send('Hello World');
});

//renderizando um cliente especifico na rota /cliente: utilizando o id
app.get('/clients/:id', (req, res) => {
    const { id } = req.params;
    const client  = clients.find((value) => value.id === Number(id));
    if(!client) return res.send('Error 404: Client not found');
    res.send(client);
});

//criando novo objeto/dado
app.post('/clients', (req, res) => {
    const { name } = req.body;
    const { age } = req.body;
    const { email } = req.body;
    const { fone } = req.body;
    const id = clients.length + 1;
    clients.push({id, name, age, email, fone});
    res.send('Client added')
});

//dando update no objeto/dado
app.put('/clients/:id', (req, res) => {
    const { id } = req.params;
    const   {name, age, email, fone}  = req.body;
    const client = clients.find((value) => value.id === Number(id));
    if (!client) return res.send('Client not found');
    client.name = name;
    client.age = age;
    client.email = email;
    client.fone = fone;
    res.send('Client updated');    
});

app.delete('/clients/:id', (req,res) => {
    const { id } = req.params;
    const index = clients.findIndex((value) => value.id === Number(id));
    if(index === -1) return res.send('Client not found');
    clients.splice(index, 1);
    res.send('Client deleted')
});

// servidor rodando na porta 3000
app.listen(3000, () => {
    console.log('server is not running on port 3000');
});





