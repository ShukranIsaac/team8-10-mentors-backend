const message = require('../../helpers/utils/messages')
const responseCode = require('../../helpers/utils/responseCode')
const { excludeKeys } = require('./profile.exclude')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const controller = function ({ }) {
    const exists = async (key, value) => await prisma.user.count({
        where: {
            [key]: {
                equals: value,
            },
        }
    })

    const addOneProfile = async ({ data }) => {
        try {
            const count = await exists('email', data.email)

            if (!(count > 0)) {
                const result = await prisma.user.create({
                    data
                })

                if (result) {
                    return message.successResponse(
                        { 'Content-Type': 'application/json' },
                        responseCode.success,
                        excludeKeys(result, ['password'])
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

    const findProfileById = async (profileId) => {
        try {
            const result = await prisma.user.findUnique({
                where: {
                    id: Number(profileId)
                }
            })

            if (result) {
                return message.successResponse(
                    { 'Content-Type': 'application/json' },
                    responseCode.success,
                    excludeKeys(result, ['password'])
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

    const findAllProfiles = async ({ data }) => {
        try {
            const result = await prisma.user.findMany()

            if (result) {
                return message.successResponse(
                    { 'Content-Type': 'application/json' },
                    responseCode.success,
                    excludeKeys(result, ['password'])
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

    const updateProfile = async ({ data }) => {
        try {
            const result = await prisma.user.update({
                data
            })

            if (result) {
                return message.successResponse(
                    { 'Content-Type': 'application/json' },
                    responseCode.success,
                    excludeKeys(result, ['password'])
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

    const deleteProfile = async (profileId) => {
        try {
            const result = await prisma.user.delete({
                where: { id: Number(profileId) }
            })

            if (result) {
                return message.successResponse(
                    { 'Content-Type': 'application/json' },
                    responseCode.success,
                    excludeKeys(result, ['password'])
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
        addOneProfile,
        findAllProfiles,
        findProfileById,
        updateProfile,
        deleteProfile
    })
}

module.exports = controller