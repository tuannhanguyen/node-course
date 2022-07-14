const path = require('path')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const Filter = require('bad-words')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

let count = 0
let message = 'Welcome !!!'

io.on('connection', (socket) => {
    socket.emit('message', message)
    socket.broadcast.emit('message', 'A new user has joined !')

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed !')
        }
        
        io.emit('message', message)
        callback()
    })

    socket.on('sendLocation', (data, callback) => {
        io.emit('message', `https://map.google.com?q=${data.latitude},${data.longitude}`)
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left !')
    })
})

server.listen(port, () => {
    console.log(`server is up on port ${port}`)
})