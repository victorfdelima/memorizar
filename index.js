const { Router } = require('express');
const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
const Tips = require('./models/tips');
const dotenv = require('dotenv').config()
const port = process.env.PORT;
const router = require('./routes')
const app = express();


app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})
//Rota importada --- Home
app.use('/', router)

//Rotas de criação de dicas
router.get('/tips/create', (req, res) => {
    res.render('adicionar')
})
router.post('/tips/create', async (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const dica = req.body.dica
    const author = req.body.author
    await Tips.create({ title, description, dica, author })

})
//Rotas de deletar dicas
router.post('/tips/delete/:id', async (req, res) => {
    const id = req.params.id
    await Tips.destroy({ where: { id: id } })
    res.redirect('/')
})
//Rota de editar dicas
router.get('/tips/edit/:id', async (req, res) => {
    const id = req.params.id
    const tips = await Tips.findOne({ where: { id: id } })
    res.render('useredit', {
        tips: tips.get({
            plain: true
        })
    })

})

router.post('/tips/update/', async (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const description = req.body.description
    const dica = req.body.dica
    const author = req.body.author

    const userData = {
        id,
        title,
        description,
        dica,
        author
    }

    await Tips.update(userData, { where: { id: id } })
    res.redirect('/')
})

app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars');

app.use(express.static('public'));


// Conexão com o banco de dados
conn.
    sync()
    //sync({ force: true })
    .then(() => {
        app.listen(port);
    }).catch((err) => console.log(err))
