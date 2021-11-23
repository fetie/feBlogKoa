const mongoose = require('mongoose')

const siteSchema = new mongoose.Schema({
    id:{
        type:Number,
        default:1,
    },
    avatar: String,
    slogan: String,
    name: String,
    domain: String,
    notice: String,
    desc: String,
})

const Site = mongoose.model('sites', siteSchema)

module.exports = {
    Site
}