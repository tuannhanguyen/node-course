const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disable')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Maintenance!')
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// Without middleware: new request -> run router handler
//
// With middleware: new request -> do something -> run router handler

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