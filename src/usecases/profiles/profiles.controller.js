const message = require('../../helpers/utils/messages')
const responseCode = require('../../helpers/utils/responseCode')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const controller = function ({ }) {
    const addOneProfile = async ({ data }) => {
        try {
            const result = await prisma.profile.create({
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
            const result = await prisma.profile.findUnique({
                where: { 
                    id: Number(profileId) 
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

    const findAllProfiles = async ({ data }) => {
        try {
            const result = await prisma.profile.findMany()

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

    const updateProfile = async ({ data }) => {
        try {
            const result = await prisma.profile.update({
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
    })
}

module.exports = controller