const {Article} = require('../models/articles')

const crud=require('./crudUtils')
const moment=require('moment')

//添加文章
const articleAdd = async (ctx) => {
    let article = ctx.request.body
    await crud.add(Article,article,ctx)
}

const articleUpdate = async (ctx) => {
    let params = ctx.request.body
    await crud.update(Article,{_id:params._id},{title:params.title,banner:params.banner,content:params.content,updateTime:moment().unix()},ctx)
}

const articleView = async (ctx) => {
    let params = ctx.request.body
    await crud.update(Article,{_id:params.id,viewNum:{$lt:99999999}},{ $inc: { viewNum: 1 }},ctx)
}

const articleDel = async (ctx) => {
    let {_id} = ctx.request.body
    await crud.del(Article,{_id},ctx)
}

const articleFind = async (ctx) => {
    let {page,title}=ctx.query
    let query={}
    if(title){
        // 相当于/title/
        const str=".*"+title+".*"
        const reg = new RegExp(str)

        query={title:{$regex:reg,$options: 'i'}}    //$options: 'i'忽略大小写
    }

    if(!page||isNaN(Number(page))){
        page=1
    }else{
        page=Number(page)
    }

    let pageSize=10

    //统计总数
    let count=0
    await Article.find(query).count().then((res)=>{
        count=res
    })
    let totalPage=0
    if(count>0){
        totalPage=Math.ceil(count/pageSize)
    }

    if(totalPage>0&&page>totalPage){
        page=totalPage
    }else if(page<1){
        page=1
    }

    let start=(page-1)*pageSize

    await Article.find(query).sort({'_id':-1}).skip(start).limit(pageSize).then((res)=>{
        if(res){
            ctx.body={
                code:200,
                result: {
                    page,
                    pageSize,
                    count,
                    data:res
                },
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: '异常'
        }
        console.error(err)
    })
}

const articleFindOne = async (ctx) => {
    let _id = ctx.params.id
    await crud.findOne(Article,{_id},ctx)
}

module.exports = {
    articleAdd,
    articleUpdate,
    articleView,
    articleDel,
    articleFind,
    articleFindOne
}