const express = require('express');
const app = express();
const path = require('path');

const port = 3000; // Porta na qual o servidor será executado

// Rota para exibir o conteúdo do arquivo index.html
app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    res.sendFile(indexPath);
});

// Rota para exibir o conteúdo do arquivo sobre.html
app.get('/sobre', (req, res) => {
    const sobrePath = path.join(__dirname, 'sobre.html');
    res.sendFile(sobrePath);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
