const PORT = process.env.PORT || 8000

// const http = require('http')
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Mongoose Configy
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/globaleyes'

mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, (err) => {
  console.log(err || `MongoDB connected to ${MONGODB_URI}`)
})


const app = express()
const server = require('http').createServer(app)

server.listen(PORT, (err) => {
  console.log(err || `Express listening on port ${PORT}`)
})

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))

require('./config/webpack')(app)

app.use('/api', require('./routes/api'))

app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../public/index.html')
  res.sendFile(indexPath)
})
