const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
global.__basedir = __dirname
const ejs = require('ejs')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const cors = require('cors')
const logger = require('morgan')
const rfs = require('rotating-file-stream')

const app = express()
const corsOptions = { origin: process.env.ALLOW_ORIGIN }
app.use(cors(corsOptions))

// all routes 
// const routes =  require('./routes/index')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
// app.use(routes)

module.exports = app