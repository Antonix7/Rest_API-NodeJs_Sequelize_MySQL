const { sequelize } = require("../database/database.config.js");
const {DataTypes} = require('sequelize')
const subsidiary = require('./subsidiary.js')
const enterpriseSchema = sequelize.define('enterprise', {
    id: {
        type: DataTypes.INTEGER,
        primarykey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    ceo: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.INTEGER
    }
})

enterpriseSchema.hasMany(subsidiary, {
    foreignKey: 'enterpriseId',
    sourceKey:'id'
})

subsidiary.belongsTo(employeesSchema, {
    foreignKey: 'enterpriseId',
    targetId: 'id'
})

module.exports = enterpriseSchema;