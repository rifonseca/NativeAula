const clientController = require("../model/model");

const userController = {

    //route root 
    getRoot: async(req,res)=>{
        res.status(200).json({msg: "The API is running!!!"})
    },

    //Controller para listar todos os usuários do banco
    listAllUsers: async(req,res)=>{
        try{
            const clients = await clientController.getAllUsers();
            res.status(200).json(clients);
        }
        catch(error){
            res.status(500).json({error: "Erro ao obter a lista de usuários"})
        }
    },

    //listar usuário por id
    listByID: async(req,res)=>{
        try{
            const sql = await clientController.getByID(req.params.id);

            if(sql.length > 0){
                res.status(200).json(sql)
            }
            else{
                res.status(401).json({msg:"Não existe registro no banco com este ID"})
            }
        }
        catch(error){
            return error
        }
    },

    //Criar um novo usuário
    createNewUser: async(req,res)=>{
        const {id,nome,sobrenome,idade} = req.body;

        try{
            const sql = await clientController.getByID(id);

            if(sql.length > 0){
                res.status(401).json({msg: "O ID já está cadastrado no BD"})
            }
            else{
                await clientController.registerUser(id,nome,sobrenome,idade);
                res.status(201).json({msg:"Usuário cadastrado com sucesso"});
            }
        }
        catch(error){
            return error
        }
    },

    //cadastrar um novo usuário no banco 
    registerSenai: async(req,res)=>{
        let {id,nome,sobrenome,email,senha} = req.body;

        let getEmail = email.toLowerCase();

        try{
            const sql = await clientController.getByEmail(email);

            if(sql.length > 0){
                res.status(401).json({msg: 'O email já está cadastrado na base de dados, insira um email diferente'});
            }
            else{
                await clientController.registerSenai(id,nome,sobrenome,email,senha);
                res.status(201).json({msg:"Usuário cadastrado com sucesso"});
            }
        }
        catch(error){
            console.log(error);
            res.status(500).json({msg:"Ocorreu um erro durante o registro do usuário"});
        }
    },

    login: async (req, res) => {
        let { email, senha } = req.body;
    
        try {
            // Verifica se o email e a senha correspondem aos registros no banco de dados
            const sql = await clientController.validateLogin(email, senha);
    
            if (sql.length > 0) {
                // Compara o email e a senha fornecidos com os do banco de dados
                if (sql[0].email === email && sql[0].senha === senha) {
                    // Se as credenciais forem válidas, retorna sucesso
                    res.status(200).json({ msg: "Email e senha validados com sucesso!!!" });
                } else {
                    // Se as credenciais não coincidirem, retorna erro de autenticação
                    res.status(401).json({ msg: "Email ou senha incorretos" });
                }
            } else {
                // Se não houver registros correspondentes, retorna erro de autenticação
                res.status(401).json({ msg: "Email ou senha incorretos" });
            }
        } catch (error) {
            // Em caso de erro interno, retorna status 500 e detalhes do erro
            res.status(500).json({ msg: "Erro interno do servidor", error: error.message });
        }
    }
};
    

module.exports = userController;
