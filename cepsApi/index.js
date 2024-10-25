const express = require('express');
const axios = require('axios');
const { ceps } = require('./models/ceps');

const app = express();
const port = 3000;

async function fetchCepsData() {
    const promises = ceps.map(cep =>
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.data)
        .catch(() => null) // comando para retornar null em caso de erro
    );

    const results = await Promise.all(promises);
    return results.filter(data => data !== null) // filtro para resultados nulos
}

app.get('/ceps', async (req, res) => {
    try{
        const data= await fetchCepsData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os dados dos CEPs.'})
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});