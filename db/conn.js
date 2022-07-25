const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('sql10508536', 'sql10508536', 'nP3Ii3theN', {
    host: 'sql10.freemysqlhosting.net',
    dialect: 'mysql',
    port: 3306
})
// try {
//     sequelize.authenticate()
//     console.log('Conectamos com sucesso')
// } catch (err) {
//     console.log(`Não foi possível conectar`, err)
// }

module.exports = sequelize