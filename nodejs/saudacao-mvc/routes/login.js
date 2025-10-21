const express = require('express');
const router = express.Router();
const loginController = require('../controllers/siteController');

router.get('/', loginController.showLoginForm);
router.post('/login', loginController.processLogin);

module.exports = router;