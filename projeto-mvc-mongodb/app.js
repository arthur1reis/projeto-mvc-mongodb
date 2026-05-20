require('dotenv').config();

const express = require('express');
const path = require('path');

const conectarDB = require('./config/db');
const logger = require('./middlewares/logger');

const app = express();

conectarDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger);

app.set('view engine', 'ejs');

const produtoRoutes = require('./routes/produtoRoutes');

app.use('/produtos', produtoRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
