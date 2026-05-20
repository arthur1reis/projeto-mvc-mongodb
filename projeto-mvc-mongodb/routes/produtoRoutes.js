const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');

router.get('/', controller.listar);
router.get('/novo', controller.novo);
router.post('/novo', controller.salvar);
router.get('/editar/:id', controller.editar);
router.post('/editar/:id', controller.atualizar);
router.get('/excluir/:id', controller.excluir);

module.exports = router;
