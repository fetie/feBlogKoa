const {Site} = require('../models/sites')

const crud=require('./crudUtils')

const siteFindOne = async (ctx) => {
    await crud.findOne(Site, {id:1},ctx)
}

module.exports = {
    siteFindOne
}