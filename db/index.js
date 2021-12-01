const mongoose=require('mongoose')

module.exports=()=>{
    mongoose.connect('mongodb://localhost:27017/feBlog',{useUnifiedTopology:true,useNewUrlParser:true})
        .then(()=>{
            console.log('连接成功')
        }).catch((err)=>{
        console.error('连接失败', err)
    })
}