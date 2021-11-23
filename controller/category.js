const {Category} = require('../models/categories')

const crud=require('./crudUtils')

const categoryFind = async (ctx) => {
    await crud.find(Category,null,ctx)
}

module.exports = {
    categoryFind
}