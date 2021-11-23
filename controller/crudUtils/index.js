
const add=(model,params,ctx)=>(
    model.create(params).then(res => {
        if (res) {
            ctx.body = {
                code: 200,
                msg: '添加成功',
                result: res
            }
        } else {
            ctx.body = {
                code: 300,
                msg: '添加失败',
            }
        }
    })
)

const update=(model,where,params,ctx)=>(
    model.updateOne(
        where,
        params
    ).then(res => {
        ctx.body = {
            code:200,
            result: res
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '异常'
        }
        console.error(err)
    })
)

const del=(model,where,ctx)=>(
    model.findOneAndDelete(where).then(res => {
        ctx.body = {
            code:200,
            result: res
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '异常'
        }
        console.error(err)
    })
)

const find=(model,where,ctx)=>(
    model.find(where).then(res => {
        ctx.body = {
            code:200,
            result: res
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '异常'
        }
        console.error(err)
    })
)

const findOne=(model,where,ctx)=>(
    model.findOne(where).then(res => {
        ctx.body = {
            code:200,
            result: res
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '异常'
        }
        console.error(err)
    })
)

module.exports={
    add,
    update,
    del,
    find,
    findOne
}