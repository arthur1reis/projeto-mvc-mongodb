const Produto = require('../models/Produto');

exports.listar = async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.render('produtos/lista', { produtos });

    } catch (erro) {
        res.status(500).send("Erro ao listar produtos");
    }
};

exports.novo = (req, res) => {
    res.render('produtos/novo');
};

exports.salvar = async (req, res) => {
    try {
        await Produto.create({
            nome: req.body.nome,
            preco: req.body.preco
        });

        res.status(201).redirect('/produtos');

    } catch (erro) {
        res.status(500).send("Erro ao salvar");
    }
};

exports.editar = async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id);

        if (!produto) {
            return res.status(404).send("Produto não encontrado");
        }

        res.render('produtos/editar', { produto });

    } catch (erro) {
        res.status(500).send("Erro ao buscar produto");
    }
};

exports.atualizar = async (req, res) => {
    try {
        await Produto.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/produtos');

    } catch (erro) {
        res.status(500).send("Erro ao atualizar");
    }
};

exports.excluir = async (req, res) => {
    try {
        await Produto.findByIdAndDelete(req.params.id);
        res.redirect('/produtos');

    } catch (erro) {
        res.status(500).send("Erro ao excluir");
    }
};
