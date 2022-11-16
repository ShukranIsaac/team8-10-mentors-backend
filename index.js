// import { PrismaClient } from '@prisma/client'
const app = require('./appConfig')
const dotenv = require('dotenv')
dotenv.config()

// const prisma = new PrismaClient()

// const seeder = require('./seeders')
// seeder()

app.listen(process.env.APP_PORT, () => {
    console.log(`MMS is running on ${process.env.APP_HOST}:${process.env.APP_PORT}`)
})