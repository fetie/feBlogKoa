const {Message} = require('../models/messages')

const crud=require('./crudUtils')

//添加留言
const messageAdd = async (ctx) => {
    let message = ctx.request.body
    message.ip=getClientIP(ctx.request)
    await crud.add(Message,message,ctx)
}

function getClientIP(req) {
    return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
        req.headers['x-real-ip'] || ''
};

//留言列表
const messageFind = async (ctx) => {
    let {page,pageSize}=ctx.query
    let query={}

    if(!page||isNaN(Number(page))){
        page=1
    }else{
        page=Number(page)
    }

    if(!pageSize||isNaN(Number(pageSize))){
        pageSize=10
    }else{
        pageSize=Number(pageSize)
    }

    //统计总数
    let total=0
    await Message.find(query).count().then((res)=>{
        total=res
    })
    let totalPage=0
    if(total>0){
        totalPage=Math.ceil(total/pageSize)
    }

    if(totalPage>0&&page>totalPage){
        page=totalPage
    }else if(page<1){
        page=1
    }

    let start=(page-1)*pageSize

    await Message.find(query).sort({'_id':-1}).skip(start).limit(pageSize).then((res)=>{
        if(res){
            ctx.body={
                code:200,
                result: {
                    page,
                    pageSize,
                    total,
                    items:res
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

module.exports = {
    messageAdd,
    messageFind
}