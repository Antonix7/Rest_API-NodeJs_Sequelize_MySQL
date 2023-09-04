import express, { json } from 'express'
import { sequelize } from './database/database.config.js'
import enterpriseRoutes from './routes/enterprise.routes.js'
import subsidiaryRoutes from './routes/subsidiary.routes.js'
const app = express()
const port = 3000

// Middlewares
app.use(json())
//app.use(initial_server())
app.use(enterpriseRoutes)
app.use(subsidiaryRoutes)

async function initial_server () {
try {
    await sequelize.sync();
    console.log('Connection is successfully.')
    app.listen(port, () => {
        console.log(`server on port: ${port}`)
    })
} catch (error) {
    console.error('Connection a database is failed')
}
}