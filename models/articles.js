const mongoose = require('mongoose')

const moment=require('moment')

const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    banner:{
        type:Array,
        default:[]
    },
    createTime:{
        type:Number,
        default:moment().unix()
    },
    updateTime:{
        type:Number,
        default:moment().unix()
    },
    sort:{
        type:Number,
        default:1
    },
    viewNum:{
        type:Number,
        default:0
    },
    author:{
        type:String,
        default:'fetie'
    }
})

const Article = mongoose.model('articles', articleSchema)

module.exports = {
    Article
}