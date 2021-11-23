const {Message} = require('../models/messages')

const crud=require('./crudUtils')

//添加留言
const messageAdd = async (ctx) => {
    let message = ctx.request.body
    message.ip=ctx.request.ip
    await crud.add(Message,message,ctx)
}

module.exports = {
    messageAdd
}