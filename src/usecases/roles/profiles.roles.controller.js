const message = require('../../helpers/utils/messages')
const responseCode = require('../../helpers/utils/responseCode')
const { excludeKeys } = require('../../helpers/utils/common')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const controller = function ({ }) {
    const exists = async (key, value) => await prisma.role.count({
        where: {
            [key]: {
                equals: value,
            },
        }
    })

    const addOneRole = async ({ data }) => {
        try {
            const count = await exists('name', data.name)

            if (!(count > 0)) {
                const result = await prisma.role.create({
                    data
                })

                if (result) {
                    return message.successResponse(
                        { 'Content-Type': 'application/json' },
                        responseCode.success,
                        result
                    )
                } else {
                    return message.badRequest(
                        { 'Content-Type': 'application/json' },
                        responseCode.badRequest,
                        {}
                    )
                }
            } else {
                return message.recordExists(
                    { 'Content-Type': 'application/json' },
                    responseCode.conflict,
                    data.email,
                    {}
                )
            }
        } catch (error) {
            return message.failureResponse(
                { 'Content-Type': 'application/json' },
                responseCode.internalServerError,
                error.message
            )
        }
    }

    const findRoleById = async (roleId) => {
        try {
            const result = await prisma.role.findUnique({
                where: {
                    id: Number(roleId)
                }
            })

            if (result) {
                return message.successResponse(
                    { 'Content-Type': 'application/json' },
                    responseCode.success,
                    result
                )
            } else {
                return message.recordNotFound(
                    { 'Content-Type': 'application/json' },
                    responseCode.notFound,
                    {}
                )
            }
        } catch (error) {
            return message.failureResponse(
                { 'Content-Type': 'application/json' },
                responseCode.internalServerError,
                error.message
            )
        }
    }

    const findAllRoles = async ({ data }) => {
        try {
            const result = await prisma.role.findMany()

            if (result) {
                return message.successResponse(
                    { 'Content-Type': 'application/json' },
                    responseCode.success,
                    result
                )
            } else {
                return message.badRequest(
                    { 'Content-Type': 'application/json' },
                    responseCode.badRequest,
                    {}
                )
            }
        } catch (error) {
            return message.failureResponse(
                { 'Content-Type': 'application/json' },
                responseCode.internalServerError,
                error.message
            )
        }
    }

    const updateRole = async (roleId, data) => {
        try {
            const upsertUser = await prisma.role.upsert({
                where: {
                    id: Number(roleId),
                },
                update: { ...data.body },
                create: { ...data.body },
            })

            if (upsertUser) {
                return message.successResponse(
                    { 'Content-Type': 'application/json' },
                    responseCode.success,
                    upsertUser
                )
            } else {
                return message.badRequest(
                    { 'Content-Type': 'application/json' },
                    responseCode.badRequest,
                    {}
                )
            }
        } catch (error) {
            return message.failureResponse(
                { 'Content-Type': 'application/json' },
                responseCode.internalServerError,
                error.message
            )
        }
    }

    const deleteRole = async (roleId) => {
        try {
            const result = await prisma.role.delete({
                where: { id: Number(roleId) }
            })

            if (result) {
                return message.successResponse(
                    { 'Content-Type': 'application/json' },
                    responseCode.success,
                    result
                )
            } else {
                return message.badRequest(
                    { 'Content-Type': 'application/json' },
                    responseCode.badRequest,
                    {}
                )
            }
        } catch (error) {
            return message.failureResponse(
                { 'Content-Type': 'application/json' },
                responseCode.internalServerError,
                error.message
            )
        }
    }

    return Object.freeze({
        addOneRole,
        findAllRoles,
        findRoleById,
        updateRole,
        deleteRole,
    })
}

module.exports = controller