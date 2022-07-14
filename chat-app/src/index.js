const path = require('path')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')

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

    socket.on('sendMessage', (data) => {
        io.emit('message', data)
    })

    socket.on('sendLocation', (data) => {
        io.emit('message', `https://map.google.com?q=${data.latitude},${data.longitude}`)
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left !')
    })
})

server.listen(port, () => {
    console.log(`server is up on port ${port}`)
})