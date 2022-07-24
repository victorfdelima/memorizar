const dotenv = require('dotenv').config()
const express = require('express')
const db = require('./models/index')
const app = express();
const conn = require('./db/conn');

const tips = db.Tips;

function criarTips() {
    const Tips = [
        {
            title: "Criar conexão com banco de dados",
            description: "const sequelize = new Sequelize('nomedobanco', 'root', 'password', {host: 'localhost',dialect: 'mysql', })module.exports = sequelize",
            dica: "sequelize Dialect é a propriedade para usar o tipo de banco se é Mysql, mongodb ou outros",
            author: "Victor",
        },
        {
            title: "Inserir a pasta views (html) nas rotas",
            description: "app.get('/', function (req, res) {res.sendFile(path.join(__dirname + '/views/index.html'));",
            dica: "//__dirname : Isso vai resolver o diretório do seu projeto.});",
            author: 'Victor',
        },
        {
            title: "Inserir css e javascript no index.js",
            description: "app.use(express.static(__dirname + '/public'));",
            dica: "Setar pasta public para inserir css e javascript",
            author: 'Victor',
        },
        {

            title: "Função de Deletar dados no banco",
            description: "function deletePessoa(id) { Pessoa.destroy({ where: { id: id } }).then(Pessoa => console.log(Pessoa)) } // deletePessoa(8);",
            dica: "",
            author: 'Victor',
        },
    ]
    tips.bulkCreate(Tips).then(Tips => console.log(Tips))
}
criarTips()