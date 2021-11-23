const router = require('koa-router')()
const {categoryFind} = require('../controller/category')

router.prefix('/categories')

router.get('/find', categoryFind)

module.exports = router
