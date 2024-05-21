const express = require("express");
const routers = require("./routers");
const client = require("../config/db");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

// Aumentar o limite de tamanho de carga útil para 50MB
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.json());
app.use(routers);

app.use((req, res, next) => {

    // Qualquer endereço pode fazer requisição "*"
    res.header("Access-Control-Allow-Origin", "*");

    // Tipos de método que a API aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    // Permitir o envio de dados para API
    res.header("Access-Control-Allow-Headers", "Content-Type");

    // Executar o cors
    app.use(cors());

    // Quando não houver erro deve continuar o processamento
    next();
});

client.query("select 1").then(()=>{
    console.log("connection success")
    app.listen(8085, function(){
        console.log("servidor rodando na url:http://localhost:8085")
    });
})
.catch(erro => console.log("connection failed \n" + erro))