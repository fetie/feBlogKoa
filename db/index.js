const mongoose=require('mongoose')
const {DB_USER,DB_PASS} = require('../config/index')

module.exports=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/feBlog?authSource=admin',{useUnifiedTopology:true,useNewUrlParser:true,user:DB_USER,pass:DB_PASS})
        .then(()=>{
            console.log('连接成功')
        }).catch((err)=>{
        console.error('连接失败', err)
    })
}