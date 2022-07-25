const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('memorizar', 'root', '82384580', {
    host: 'localhost',
    dialect: 'postgres'
})
// try {
//     sequelize.authenticate()
//     console.log('Conectamos com sucesso')
// } catch (err) {
//     console.log(`Não foi possível conectar`, err)
// }

module.exports = sequelize