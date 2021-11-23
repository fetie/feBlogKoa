const router = require('koa-router')()
const {friendFind} = require('../controller/friend')


router.get('/friends', friendFind)

module.exports = router
