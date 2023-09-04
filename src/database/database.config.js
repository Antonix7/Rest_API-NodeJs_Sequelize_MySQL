import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'mycompanydb',
    'root',
    '123456', 
    {
    host: 'localhost',
    dialect: 'mysql'
    }
)

export {sequelize};