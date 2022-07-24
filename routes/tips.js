const express = require('express');
const Tips = require('../models/tips');
const router = express.Router();



router.get('/tips/:id', async (req, res) => {
    const id = req.params.id
    const tips = await Tips.findOne({ include: Address, where: { id: id } })
    res.render('userview', {
        user: tips.get({
            plain: true
        })
    })

})

router.post('/tips/delete/:id', async (req, res) => {
    const id = req.params.id
    await Tips.destroy({ where: { id: id } })
    res.redirect('/')
})

// router.post('/address/delete', async (req, res) => {
//     const UserId = req.body.UserId
//     const id = req.body.id
//     Address.destroy({
//         where: { id: id }
//     })
//     res.redirect('/')
// })
router.get('/tips/edit/:id', async (req, res) => {
    const id = req.params.id
    const tips = await Tips.findOne({ include: Address, where: { id: id } })
    res.render('useredit', {
        user: user.get({
            plain: true
        })
    })

})

router.post('/tips/update/', async (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const description = req.body.description
    const author = req.body.author

    const userData = {
        id,
        title,
        description,
        author
    }

    await Tips.update(userData, { where: { id: id } })
    res.redirect('/')
})
