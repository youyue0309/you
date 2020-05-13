const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/registUser', async (ctx)=>{
    // console.log('请求成功');
    // ctx.body = 'sss';
    //获取model
    const User = mongoose.model('User');
    //接收post请求封装成user对象
    let newUser = new User(ctx.request.body);
    //使用save保存用户信息
    newUser.address = "";
    await newUser.save().then(()=>{
        ctx.body = {
            code: 200,
            message: '注册成功'
        }
    }).catch(err=>{
        ctx.body = {
            code: 500,
            message: err
        }
    });
});

router.post('/loginUser', async (ctx) => {
    //接受前端数据
    let loginUser = ctx.request.body;
    let userName = loginUser.userName;
    let password = loginUser.password;
    //引入model
    const User = mongoose.model('User');
    const Admin = mongoose.model('Admin');
    //查询用户名是否存在 存在再去比较密码
    await User.findOne({ userName: userName }).exec().then(async (result) => {
        if (result) {
            let newUser = new User();
            await newUser.comparePassword(password, result.password).then(isMatch => {
                //登陆成功
                if (isMatch) {
                    ctx.body = {
                        code: 200,
                        message: '登录成功',
                        userInfo: result
                    }
                } else {
                    ctx.body = {
                        code: 201,
                        message: '登录失败'
                    }
                }
            })
        } else {
            ctx.body = {
                code: 201,
                message: '用户名不存在'
            }
        }
    });
    await Admin.findOne({ userName: userName }).exec().then(async (result) => {
        if (result) {
            let newAdmin = new Admin();
            await newAdmin.comparePassword(password, result.password).then(isMatch => {
                //登陆成功
                if (isMatch) {
                    ctx.body = {
                        code: 100,
                        message: '登录成功',
                        userInfo: result
                    }
                } else {
                    ctx.body = {
                        code: 201,
                        message: '登录失败'
                    }
                }
            })
        } 
    });
});

router.get('/getUserList', async (ctx)=>{
    const User = mongoose.model('User');
    await User.find().skip(parseInt(ctx.query.start)).limit(parseInt(ctx.query.limit)).exec().then((res)=>{
        ctx.body = res;
    });
});

//删除用户
router.post('/deleteUser', async (ctx) => {
    const User = mongoose.model('User');
    await User.deleteOne({_id: ctx.query.id}).exec().then((res) => {
        ctx.body = {
            code: 200,
            message: '删除成功'
        }
    }).catch(err=>{
        ctx.body = {
            code: 500,
            message: '失败'
        }
    });
});

router.get('/getuserDetail', async (ctx) => {
    const User = mongoose.model('User');
    await User.findOne({ userName: ctx.query.username }).exec().then(res => {
        ctx.body = res;
    });
});

router.get('/updatePassword', async (ctx) => {
    const User = mongoose.model('User');
    await User.findByIdAndUpdate(ctx.query.id, {
        $set: {
            password: ctx.query.password
        }
    }, { new: true }).exec().then((res) => {
        // console.log(res);
        ctx.body = res;
        res.save().then(() => {
            // console.log(res);
            ctx.body = {
                code: 200,
                message: '修改成功'
            }
        }).catch(err => {
            ctx.body = {
                code: 500,
                message: err
            }
        });
    });
});

router.get('/updateAddress', async (ctx) => {
    const User = mongoose.model('User');
    await User.findByIdAndUpdate(ctx.query.id, {
        $set: {
            address: ctx.query.address
        }
    }, { new: true }).exec().then((res) => {
        // console.log(res);
        ctx.body = res;
    });
});


module.exports = router;