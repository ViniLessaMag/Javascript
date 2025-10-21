module.exports = {
    Clientes: (req, res) => {
        res.sendFile("clientes.html", { root: "./views" });
    }
    ,
    login: (req, res) => {
        res.sendFile("login.html", { root: "./views" });
    }  
}