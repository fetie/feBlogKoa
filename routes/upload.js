const multer=require('koa-multer')
const fs=require('fs')
const path=require('path')
const moment=require('moment')
const router = require('koa-router')()

router.prefix('/upload')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        const dateTime=moment().format('YYYY')+moment().format('MM')+moment().format('DD')
        let dir="public/uploads/"+dateTime
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir,{
                recursive:true
            })
        }

        cb(null,dir)
    },
    filename:(req,file,cb)=>{
        let fileName=file.fieldname+"-"+moment().unix()+path.extname(file.originalname)
        cb(null,fileName)
    }
})

let upload=multer({storage})

//上传图片的接口
router.post('/img',upload.single('file'),async ctx=>{
    let path=ctx.req.file.path
    path=ctx.origin+''+path.replace('public','')
    ctx.body={
        code:200,
        url:path,
        msg:'success'
    }
})


module.exports = router