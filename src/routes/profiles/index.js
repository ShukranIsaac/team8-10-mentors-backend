const express =  require('express')
const router =  express.Router()

router.use(require('./profiles.routes'))
router.use(require('./profiles.tasks'))

module.exports = router