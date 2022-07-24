const express = require('express');
const Tips = require('../models/Tips');
const router = express.Router();


router.get('/', async (req, res) => {
    const tips = await Tips.findAll({ raw: true })
    res.render('Home', { tips: tips })
})


module.exports = router;