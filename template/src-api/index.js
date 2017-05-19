const Router = require('express').Router
const router = Router()

router.use('/hello-world', require('./hello-world'))

module.exports = router
