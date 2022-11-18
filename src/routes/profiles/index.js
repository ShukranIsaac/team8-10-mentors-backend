const express =  require('express')
const router =  express.Router()

router.use(require('./profiles.routes'))
router.use(require('./profiles.tasks'))
router.use(require('./profiles.roles.routes'))
router.use(require('./roles.routes'))

module.exports = router