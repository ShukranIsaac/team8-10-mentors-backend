const express = require('express')
const router = express.Router()

const profileController = require('../../usecases/profiles/index')
const profileRoleController = require('../../usecases/roles/index')
const adaptRequest = require('../../helpers/adaptRequest')
const sendResponse = require('../../helpers/sendResponse')

router.post('/profiles/:id/roles', async (req, res, next) => {
    const request = adaptRequest(req)

    profileRoleController.addOneRole({ data: request.body })
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
})

router.get('/profiles/:id/roles', async (req, res, next) => {
    const request = adaptRequest(req)

    profileRoleController.findAllRoles({ data: request.body })
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
})

router.get('/profiles/:id/roles/:rid', async (req, res, next) => {
    const request = adaptRequest(req)

    profileRoleController.findRoleById(request.pathParams.rid)
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
})

const updateProfile = async (req, res, next) => {
    const request = adaptRequest(req)

    profileRoleController.updateRole(request.pathParams.id, request)
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
}

router.put('/profiles/:id/roles/:rid', async (req, res, next) => updateProfile(req, res, next))
    .patch('/profiles/:id/roles/:rid', async (req, res, next) => updateProfile(req, res, next))

router.delete('/profiles/:id/roles/:rid', async (req, res, next) => {
    const request = adaptRequest(req)

    profileRoleController.deleteRole(request.pathParams.rid)
        .then((result) => sendResponse(res, result))
        .catch((e) => sendResponse(res, e))
})

module.exports = router