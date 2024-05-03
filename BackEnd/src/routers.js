const express = require("express");
const clientController = require("../controller/controller");
const router = express.Router();

router.get('/', clientController.getRoot); //rota raiz
router.get('/api/read', clientController.listAllUsers); //Listar todos os usuários
router.get('/api/read/:id',clientController.listByID); //Listar usuário por id
router.post('/api/create', clientController.createNewUser); //Cadastrar novo usuário 
router.post('/api/registersenai', clientController.registerSenai); //Cadastrar um novo usuário 
router.post('/api/validate', clientController.login); //Validar o Login

module.exports = router;