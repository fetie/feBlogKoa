const mongoose = require('mongoose')

const cateSchema = new mongoose.Schema({
    title: String,
    href: String,
})

const Category = mongoose.model('categories', cateSchema)

module.exports = {
    Category
}