const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get("/", produtosController.Produtos);
router.get("/camisetas", produtosController.camisetas);

module.exports = router;