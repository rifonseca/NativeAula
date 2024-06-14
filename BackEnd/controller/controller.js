const clientController = require("../model/model");

const userController = {

    //route root 
    getRoot: async (req, res) => {
        res.status(200).json({ msg: "The API is running!!!" })
    },

    //Controller para listar todos os usuários do banco
    listAllUsers: async (req, res) => {
        try {
            const clients = await clientController.getAllUsers();
            res.status(200).json(clients);
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao obter a lista de usuários" })
        }
    },

    //listar usuário por id
    listByID: async (req, res) => {
        try {
            const sql = await clientController.getByID(req.params.id);

            if (sql.length > 0) {
                res.status(200).json(sql)
            }
            else {
                res.status(401).json({ msg: "Não existe registro no banco com este ID" })
            }
        }
        catch (error) {
            return error
        }
    },

    //Criar um novo usuário
    createNewUser: async (req, res) => {
        const { id, nome, sobrenome, idade } = req.body;

        try {
            const sql = await clientController.getByID(id);

            if (sql.length > 0) {
                res.status(401).json({ msg: "O ID já está cadastrado no BD" })
            }
            else {
                await clientController.registerUser(id, nome, sobrenome, idade);
                res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
            }
        }
        catch (error) {
            return error
        }
    },

    //cadastrar um novo usuário no banco 
    registerSenai: async (req, res) => {
        let { id, nome, sobrenome, email, senha } = req.body;

        let getEmail = email.toLowerCase();

        try {
            const sql = await clientController.getByEmail(email);

            if (sql.length > 0) {
                res.status(401).json({ msg: 'O email já está cadastrado na base de dados, insira um email diferente' });
            }
            else {
                await clientController.registerSenai(id, nome, sobrenome, email, senha);
                res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Ocorreu um erro durante o registro do usuário" });
        }
    },

   

    //aluno 
    registerImageStudents: async (req, res) => {
        try {
            const { id, nome, sobrenome, email, senha, imagemBase64 } = req.body;

            console.log(req.body);

            const sql = await clientController.getByEmailStudents(email);

            if (sql.length > 0) {
                res.status(404).json({ msg: "O email já existe" });
            }
            else {
                const result = await clientController.registerImage(id, nome, sobrenome, email, senha, imagemBase64);
                return res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
            }
        } catch (error) {
            console.error('Erro ao registrar usuário com a imagem', error);
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    login: async (req, res) => {
        let { email, senha } = req.body;

        //console.log(req.body);

        try {
            const sql = await clientController.validateLoginStudents(email, senha);

            console.log(sql[0]);

            if (sql.length > 0) {
                res.status(200).json(sql[0]);

            } else {
                res.status(401).json({ msg: "Email ou senha incorretos" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Erro interno do servidor", error: error.message });
        }
    },

    //controller para listar todos os alunos 
    getAllStudents: async(req,res) =>{
        try{
            const client = await clientController.getAllUsers();
            res.status(200).json(client);
        }
        catch(error){
            res.status(500).json({msg:'Erro no servidor'})
        }
    },

    //professor 
    registerProfessor: async (req, res) => {
        try {
            const { id, nome, sobrenome, email, senha } = req.body;

            const sql = await clientController.getByEmailTeacher(email);

            if (sql.length > 0) {
                res.status(404).json({ msg: "O email já existe" });
            }
            else {
                const result = await clientController.registerTeacher(id, nome, sobrenome, email, senha);
                return res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
            }
        } catch (error) {
            console.error('Erro ao registrar usuário com a imagem', error);
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    loginProfessor: async (req, res) => {
        let { email, senha } = req.body;

        try {
            const sql = await clientController.validateLoginTeacher(email, senha);

            if (sql.length > 0) {
                res.status(200).json({ msg: "Email e senha validados com sucesso!!!" });

            } else {
                res.status(401).json({ msg: "Email ou senha incorretos" });
            }
        } catch (error) {
            res.status(500).json({ msg: "Erro interno do servidor", error: error.message });
        }
    },

    //controller para reset 
    getEmailReset: async (req,res) =>{
        let {email} = req.body

        console.log(req.body);

        email = email.toLowerCase();

        try{
            const sql = await clientController.getByEmailStudents(email);

            console.log(sql);

            if(sql.length > 0){
                res.status(200).json({msg:'Success'})
            }
            else{
                res.status(404).json({msg:"Email não está cadastrado no BD"});
            }
        }
        catch(error){
            if(error){
                res.status(500).json(error);
            }
        }
    },

    resetPassword: async (req,res) =>{
        let {email,senha} = req.body

        email = email.toLowerCase();

        try{
            await clientController.updatePassword(email,senha);
            res.status(200).json({msg:"Senha atualizada com sucesso"});
        }
        catch(error){
            console.log("Erro ao redefinir a senha");
            res.status(500).json({msg:"Erro no servidor"})
        }
    },

    // Método para obter usuário por ID
    getUserById: async (req, res) => {
        try {
            let userId = req.params.id;

            const user = await clientController.getUserById(userId);

            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ msg: 'Usuário não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao buscar usuário por ID:', error);
            res.status(500).json({ msg: 'Erro ao buscar usuário' });
        }
    },
};

module.exports = userController;
