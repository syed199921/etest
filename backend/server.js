const express = require('express')
const employeeRouter = require('./Routers/EmployeeRouter')
const DBConnection = require('./MongoDB')
require('dotenv').config()


const app = express()

app.use(express.json())
app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

app.use('/employees',employeeRouter)

app.listen(process.env.PORT, () =>{
    console.log("The server is up and working\nPort Number: ",process.env.PORT)
})

DBConnection()