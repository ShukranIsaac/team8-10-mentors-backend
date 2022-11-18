const express = require('express')
const router = express.Router()

const profileRoleController = require('../../usecases/roles/index')
const adaptRequest = require('../../helpers/adaptRequest')
const sendResponse = require('../../helpers/sendResponse')

router.get('/roles', async (req, res, next) => {
    const request = adaptRequest(req)

    profileRoleController.findAllRoles({ data: request.body })
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
})

router.get('/roles/:id', async (req, res, next) => {
    const request = adaptRequest(req)

    profileRoleController.findRoleById(request.pathParams.id)
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
})

module.exports = router