const router = require('koa-router')()
const userCtl = require('../controller/user')

router.prefix('/users')

router.post('/login', userCtl.login)

router.get('/logout', userCtl.logout)

//验证用户登录
router.post('/verify',userCtl.verifyLogin)

//修改密码
router.post('/update/pwd',userCtl.updatePwd)

//用户信息
router.get('/info',userCtl.getInfo)

module.exports = router
