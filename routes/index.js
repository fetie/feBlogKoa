const fs=require('fs')
const router = require('koa-router')()

fs.readdirSync(__dirname).forEach(file=>{
  if(file!=='index.js'){
    let r= require('./'+file)
    router.use(r.routes())
  }
})

module.exports=router
