const mongoose = require('mongoose');

async function conectarDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB conectado");
    } catch (erro) {
        console.log("Erro ao conectar:", erro);
    }
}

module.exports = conectarDB;
