const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const posts = require('./routes/posts')
// const images = require('./routes/images')
// const tags = require('./routes/tags')
const auth = require('./routes/auth')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/', posts)
// server.use('/api/v1/', images)
// server.use('/api/v1/', tags)
server.use('/api/v1/', auth)

module.exports = server
