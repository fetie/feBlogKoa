const router = require('koa-router')()
const {siteFindOne} = require('../controller/site')

router.prefix('/sites')

router.get('/', siteFindOne)

module.exports = router
