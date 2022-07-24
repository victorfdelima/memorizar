require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');

port = process.env.PORT
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.png')));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(port, console.log(`Aplicativo rodando na porta ${port}`))