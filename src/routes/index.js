const express = require('express')
const router = express.Router()
const rateLimit = require('express-rate-limit')

const rateLimiter = rateLimit({
    windowMs: 1000,
    max: 1000,
    message: 'Too many requests from this source IP, please try again later'
})

router.use(rateLimiter,require('./profiles/index'))

module.exports = router
