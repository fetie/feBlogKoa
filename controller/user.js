const {User} = require('../models/users')
const crud=require('./crudUtils')

const jwt = require('jsonwebtoken')

const login = async (ctx) => {

    let {name, pwd} = ctx.request.body

    await User.findOne({name, pwd}).then(res => {

        if (res) {
            let token = jwt.sign({
                name: res.name,
                _id: res._id
            }, 'fe-blog-server-jwt', {
                expiresIn: 3600 * 24 * 7
            })
            ctx.session.user=res._id
            ctx.body = {
                code: 200,
                msg: '登录成功',
                result:token
            }
        } else {
            ctx.body = {
                code: 300,
                msg: '登录失败'
            }
        }

    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: '异常'
        }
        console.error(err)
    })
}

const verifyLogin = async ctx => {
    let token = ctx.header.authorization
    token = token.replace('Bearer ', '').trim()
    try {
        let result = jwt.verify(token, 'fe-blog-server-jwt')
        await User.findOne({_id: result._id}).then(res => {
            if (res) {
                ctx.body = {
                    code: 200,
                    msg: '认证成功',
                    result: res
                }
            } else {
                ctx.body = {
                    code: 200,
                    msg: '认证失败',
                }
            }
        }).catch(() => {
            ctx.body = {
                code: 200,
                msg: '认证失败',
            }
        })
    } catch (err) {
        ctx.body = {
            code: 200,
            msg: '认证失败',
        }
    }
}

const updatePwd = async ctx => {
    let {name,pwd}=ctx.request.body
    await User.updateOne(
        {name},
        {pwd}
    ).then(res=>{
        if(res.modifiedCount>0){
            ctx.body = {
                code: 200,
                msg: '修改成功',
            }
        }else{
            ctx.body = {
                code: 300,
                msg: '修改失败',
            }
        }
    }).catch(() => {
        ctx.body = {
            code: 500,
            msg: '修改失败',
        }
    })
}

const getInfo=async ctx => {
    await crud.findOne(User, {_id:ctx.session.user},ctx)
}

const logout=async ctx => {
    ctx.session = null;
    await ctx.redirect('/users/login');
}

module.exports = {
    login,
    logout,
    verifyLogin,
    updatePwd,
    getInfo
}