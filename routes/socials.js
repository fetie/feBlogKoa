const router = require('koa-router')()
const {socialFind} = require('../controller/social')

router.prefix('/socials')

router.get('/', socialFind)

module.exports = router
