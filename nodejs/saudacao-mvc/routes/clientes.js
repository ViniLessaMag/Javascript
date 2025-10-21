const express = require('express');
const router = express.Router();

// GET /clientes
router.get('/', (req, res) => {
	// ...pode buscar clientes no DB aqui...
	const clientes = [
		{ id: 1, nome: 'Cliente A' },
		{ id: 2, nome: 'Cliente B' }
	];
	res.render('clientes', { title: 'Clientes', clientes });
});

// GET /clientes/login
router.get('/login', (req, res) => {
	res.render('login', { title: 'Login', error: null });
});

// POST /clientes/login
router.post('/login', (req, res) => {
	const { usuario, senha } = req.body || {};
	// ...autenticação de exemplo...
	if (usuario === 'admin' && senha === '123') {
		// sucesso -> redireciona para lista de clientes
		return res.redirect('/clientes');
	}
	// falha -> reexibe formulário com erro
	res.render('login', { title: 'Login', error: 'Credenciais inválidas' });
});

module.exports = router;