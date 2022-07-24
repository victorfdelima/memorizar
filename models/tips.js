const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Tips = db.define('Tips', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    dica: {
        type: DataTypes.STRING,
        required: true
    },
    author: {
        type: DataTypes.STRING,

    },
})

module.exports = Tips