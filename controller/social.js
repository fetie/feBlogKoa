const {Social} = require('../models/socials')

const crud=require('./crudUtils')

const socialFind = async (ctx) => {
    await crud.find(Social,null,ctx)
}

module.exports = {
    socialFind
}