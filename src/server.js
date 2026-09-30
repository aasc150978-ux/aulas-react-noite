const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o MySQL Workbench
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Altere se o seu usuário for diferente
    password: '', // Substitua pela sua senha do MySQL
    database: 'aula_db'
});

db.connect(err => {
    if (err) console.error('Erro ao conectar no MySQL:', err);
    else console.log('Conectado ao MySQL Workbench com sucesso!');
});

// Rota para salvar os dados recebidos do App
app.post('/salvar', (req, res) => {
    const { campo1, campo2 } = req.body;
    const query = 'INSERT INTO mensagens (campo1, campo2) VALUES (?, ?)';

    db.query(query, [campo1, campo2], (err, result) => {
        if (err) {
            return res.status(500).json({ erro: 'Erro ao salvar no banco.' });
        }
        res.status(200).json({ mensagem: 'Dados salvos com sucesso!' });
    });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));