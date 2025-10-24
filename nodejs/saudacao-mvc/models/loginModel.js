const { verificado } = require("../controllers/clientesController")

module.exports = {
    autenticar: (usuario, senha) => {
        // ...autenticação de exemplo...
        if (usuario === 'admin' && senha === '123') {
            return 'Olá admin, você foi autenticado com sucesso!';
        }
        else {
            return 'Você falhou na autenticação.';
        }
}};