const {sequelize} = require('../database/database.config.js')
const {DataTypes} = require('sequelize')

const subsidiarySchema = sequelize.define('subsidiary', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncremente: true
    },
    name: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING
    }
})

module.exports = subsidiarySchema;