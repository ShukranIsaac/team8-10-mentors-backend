const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()
global.__basedir = __dirname
const ejs = require('ejs')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const logger = require('morgan')
const rfs = require('rotating-file-stream')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger.json')

const middlewares = require('./src/middlewares/index')

const app = express()
const corsOptions = { origin: process.env.ALLOW_ORIGIN }
app.use(cors(corsOptions))
app.use(helmet())

app.use(logger(':method :url :status - [:date[web]] - :remote-addr - :response-time ms'))
app.use(logger(':method - :url - :status - :res[content-length] - [:date[web]] - :remote-addr - :response-time ms',
    { stream: middlewares.logs().stream(rfs, path) }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// all routes 
const routes =  require('./src/routes/index')

app.use('/api/v1', routes)
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app 