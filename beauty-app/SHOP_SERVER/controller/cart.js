const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/addCart', async (ctx) => {
    const Cart = mongoose.model('Cart');
    const cart = new Cart(ctx.request.body);
    await cart.save().then(()=>{
        ctx.body = {
            code: 200,
            message: '添加成功'
        }
    }).catch(err=>{
        ctx.body = {
            code: 500,
            message: err
        }
    });
});

router.get('/getCart', async (ctx) => {
    const Cart = mongoose.model('Cart');
    await Cart.find({userId: ctx.query.userId}).populate('productId').exec().then( res => {
        ctx.body = res;
    });
});

router.post('/delCart', async (ctx) => {
    const Cart = mongoose.model('Cart');
    // console.log(ctx.query.id);
    // console.log(ctx.query.userId);
    await Cart.deleteOne({productId: ctx.query.id, userId: ctx.query.userId}).exec().then(() => {
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

module.exports = router;