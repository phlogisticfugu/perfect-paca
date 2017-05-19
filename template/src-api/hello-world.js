const Router = require('express').Router
const router = Router()

router.get('/', function (req, res, next) {
  res.json({
    'output': 'Hello World!'
  })
})

module.exports = router
