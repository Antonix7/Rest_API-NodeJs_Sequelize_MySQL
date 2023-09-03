const express = require('express')
const sequelize = require('./database/database.config.js')
const enterpriseRoutes = require('./routes/enterprise.routes.js')
const subsidiaryRoutes = require('./routes/subsidiary.routes.js')
const app = express()
const port = 3000

// Middlewares
app.use(express.json)

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