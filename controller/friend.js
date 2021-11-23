const {Friend} = require('../models/friends')

const crud=require('./crudUtils')

const friendFind = async (ctx) => {
    await crud.find(Friend,null,ctx)
}

module.exports = {
    friendFind
}