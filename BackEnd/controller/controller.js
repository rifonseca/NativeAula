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
    }
};

module.exports = userController;
