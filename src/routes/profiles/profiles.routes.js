const express = require('express')
const router = express.Router()

const profileController = require('../../usecases/profiles/index')
const adaptRequest = require('../../helpers/adaptRequest')
const sendResponse = require('../../helpers/sendResponse')

router.post('/profiles', async (req, res, next) => {
    const request = adaptRequest(req)

    profileController.addOneProfile({ data: request.body })
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
})

router.get('/profiles', async (req, res, next) => {
    const request = adaptRequest(req)

    profileController.findAllProfiles({ data: request.body })
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
})

router.get('/profiles/:id', async (req, res, next) => {
    const request = adaptRequest(req)

    profileController.findProfileById(request.pathParams.id)
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
})

const updateProfile = async (req, res, next) => {
    const request = adaptRequest(req)

    profileController.updateProfile(request.pathParams.id, request)
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
}

router.put('/profiles/:id', async (req, res, next) => updateProfile(req, res, next))
    .patch('/profiles/:id', async (req, res, next) => updateProfile(req, res, next))

router.delete('/profiles/:id', async (req, res, next) => {
    const request = adaptRequest(req)

    profileController.deleteProfile(request.pathParams.id)
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
})

module.exports = router