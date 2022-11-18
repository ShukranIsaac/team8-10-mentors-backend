const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const makeProfileRoleController = require('../roles/profiles.roles.controller')

const profileRoleController = makeProfileRoleController({})

module.exports = profileRoleController