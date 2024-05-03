const connection = require("../config/db");

const userModel = {
    getAllUsers: async () => {
        const [result] = await connection.query("SELECT * FROM cadastro_senai")
            .catch(erro => console.log(erro));
        return result
    },

    getByID: async (id) => {
        const [result] = await connection.query("SELECT * FROM cadastro_senai WHERE id =?", [id])
            .catch(erro => console.log(erro));
        return result
    },

    registerUser: async (id, nome, sobrenome, idade) => {
        const [result] = await connection.query("INSERT INTO cadastro_senai values(?,?,?,?)", [id, nome, sobrenome, idade])
            .catch(erro => console.log(erro));
        return result
    },

    //model para Login 
    getByEmail: async (email) => {
        const [result] = await connection.query("SELECT * FROM cadastro_login WHERE email=?", [email])
            .catch(erro => console.log(erro));
        return result
    },

    validateLogin: async (email, senha) => {
        const [result] = await connection.query("SELECT * FROM cadastro_login WHERE email=? AND senha=?", [email, senha])
            .catch(erro => console.log(erro));
        return result
    },

    registerSenai: async (id, nome, sobrenome, email, senha) => {
        const [result] = await connection.query('INSERT INTO cadastro_login values(?,?,?,?,?)', [id, nome, sobrenome, email, senha])
        .catch(erro => console.log(erro));
        return result
    }
};

module.exports = userModel;