const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server on listen " + port)
})

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const myFunction = async () => {
    // const password = 'Nhan@!12345'
    // const hashedPassword = await bcrypt.hash(password,  8)
    
    // console.log(password)
    // console.log(hashedPassword)

    // const isMatch = await bcrypt.compare('Nhan@!12345', hashedPassword)

    // console.log(isMatch)

    const token = jwt.sign({_id: 'abc123'}, 'thisismycourse')
    console.log(token)

    const data = jwt.verify(token, 'thisismycourse')
    console.log(data)
}

myFunction()