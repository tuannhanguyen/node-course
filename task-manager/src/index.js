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

const multer = require('multer')

const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000   
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))
        }

        cb(undefined, true)
    }
})

const errorMiddleware = () => {
    throw new Error('From my middleware')
}

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})
