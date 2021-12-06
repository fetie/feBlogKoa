const router = require('koa-router')()
const {messageAdd,messageFind} = require('../controller/message')

router.post('/messages', messageAdd)

router.get('/messages/list', messageFind)

module.exports = router