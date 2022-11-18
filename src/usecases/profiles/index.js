const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const makeProfileController = require('./profiles.controller')

const profileController = makeProfileController({})

module.exports = profileController