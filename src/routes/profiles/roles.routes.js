const express = require('express')
const router = express.Router()

const profileController = require('../../usecases/profiles/index')
const adaptRequest = require('../../helpers/adaptRequest')
const sendResponse = require('../../helpers/sendResponse')

router.get('/roles', async (req, res, next) => {
    const request = adaptRequest(req)

    profileController.findAllProfiles({ data: request.body })
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
})

router.get('/roles/:id', async (req, res, next) => {
    const request = adaptRequest(req)

    profileController.findProfileById(request.pathParams.id)
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
})

module.exports = router