import { sequelize } from '../database/database.config.js'
import { DataTypes } from 'sequelize'
import subsidiarySchema from'./subsidiary.js'

const enterpriseSchema = sequelize.define('enterprise', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    ceo: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    }
})

enterpriseSchema.hasMany(subsidiarySchema, {
    foreignKey: 'enterpriseId',
    sourceKey:'id'
})

subsidiarySchema.belongsTo(enterpriseSchema, {
    foreignKey: 'enterpriseId',
    targetId: 'id'
})

export default enterpriseSchema