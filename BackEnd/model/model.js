const connection = require("../config/db");

const userModel = {
    getAllUsers: async () => {
        const [result] = await connection.query("SELECT * FROM registro_aluno")
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
    },

    //model do aluno 
    getByEmailStudents: async (email) => {
        const [result] = await connection.query("SELECT * FROM registro_aluno WHERE email=?", [email])
            .catch(erro => console.log(erro));
        return result
    },

    validateLoginStudents: async (email, senha) => {
        const [result] = await connection.query("SELECT * FROM registro_aluno WHERE email=? AND senha=?", [email, senha])
            .catch(erro => console.log(erro));
        return result
    },

    registerImage: async (id, nome, sobrenome, email, senha, imagem) => {
        try {
            const [result] = await connection.query("INSERT INTO registro_aluno (id,nome,sobrenome,email,senha,imagem) VALUES(?,?,?,?,?,?)", [id, nome, sobrenome, email, senha, imagem])
            return result;
        } catch (error) {
            console.log('Erro ao registrar o usuário com a imagem', error);
            throw new Error('Erro ao registrar o usuário');
        }
    },

    //model professor 
    getByEmailTeacher: async (email) => {
        const [result] = await connection.query("SELECT * FROM professores WHERE email=?", [email])
            .catch(erro => console.log(erro));
        return result
    },

    validateLoginTeacher: async (email, senha) => {
        const [result] = await connection.query("SELECT * FROM professores WHERE email=? AND senha=?", [email, senha])
            .catch(erro => console.log(erro));
        return result
    },

    registerTeacher: async (id, nome, sobrenome, email, senha) => {
        const result = await connection.query("INSERT INTO professores values(?,?,?,?,?)", [id, nome, sobrenome, email, senha])
            .catch(error => console.log(error))
        return result;
    },

    //email para resetar senha aluno 
    resetByEmail: async (email) => {
        const [result] = await connection.query("SELECT * FROM registro_aluno WHERE email=?", [email])
            .catch(error => console.log(error))
        return result;
    },

    //update the password
    updatePassword: async (email, senha) => {
        const result = await connection.query("UPDATE registro_aluno SET senha=? WHERE email=?", [senha, email])
            .catch(error => console.log(error))
        return result;
    },

    getUserById: async (id) => {
        const result = await connection.query("SELECT * FROM registro_aluno WHERE id = ?", [id])
            .catch(error => console.log(error));
        return result[0];  // Assumindo que o resultado seja um array com um único usuário
    },

};

module.exports = userModel;