import { sequelize } from '../database/database.config.js'
import { DataTypes } from 'sequelize'

const subsidiarySchema = sequelize.define('subsidiary', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING
    }
})

export default subsidiarySchema;