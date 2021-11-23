const router = require('koa-router')()
const {messageAdd} = require('../controller/message')

router.post('/messages', messageAdd)

module.exports = router