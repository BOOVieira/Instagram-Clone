const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb+srv://BooDev:8545652@cluster0-p7ilx.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true })

app.use(cors())

app.use(express.json())

app.use((req, res, next) => {
    req.io = io

    next()
})

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes'))

server.listen(3333)