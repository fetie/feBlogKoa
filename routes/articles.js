const router = require('koa-router')()
const articleCtl = require('../controller/article')

router.prefix('/articles')

router.post('/add', articleCtl.articleAdd)


router.post('/update', articleCtl.articleUpdate)

router.post('/view', articleCtl.articleView)


router.post('/del', articleCtl.articleDel)


router.get('/find', articleCtl.articleFind)


router.get('/find/:id', articleCtl.articleFindOne)

module.exports = router