const express = require("express");
const clientController = require("../controller/controller");
const router = express.Router();

router.get('/', clientController.getRoot); //rota raiz
router.get('/api/read', clientController.listAllUsers); //Listar todos os usuários
router.get('/api/read/:id',clientController.listByID); //Listar usuário por id
router.post('/api/create', clientController.createNewUser); //Cadastrar novo usuário 
router.post('/api/registersenai', clientController.registerSenai); //Cadastrar um novo usuário 
router.post('/api/validate', clientController.login); //Validar o Login

//Aluno 
router.post('/api/login/aluno', clientController.login); //login dos alunos
router.post('/api/registeraluno', clientController.registerImageStudents); //cadastrar alunos
router.get('/api/students', clientController.getAllStudents); //Listar todos os alunos
router.post('/api/reset', clientController.getEmailReset); //verificar o email de reset
router.post('/api/resetpassword', clientController.resetPassword); //resetar a senha

//Professor
router.post('/api/login/professor', clientController.loginProfessor); //login dos professores
router.post('/api/registerprofessor', clientController.registerProfessor); //cadastrar professores

router.get('/api/users/:id', clientController.getUserById);

module.exports = router;