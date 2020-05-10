const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/addOrder', async (ctx) => {
    // console.log('pp');
    const Order = mongoose.model('Order');
    // console.log(ctx.request.body);
    const order = new Order(ctx.request.body);
    var num = "";
    for(var i=0;i<9;i++){
        num += Math.floor(Math.random()*10)
    }
    order.orderId = num;
    await order.save().then(()=>{
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

router.get('/getOrder', async (ctx) => {
    const Order = mongoose.model('Order');
    await Order.find({userId: ctx.query.userId}).exec().then( res => {
        ctx.body = res;
    });
});

router.post('/delOrder', async (ctx) => {
    const Order = mongoose.model('Order');
    await Order.deleteOne({_id: ctx.query.id}).exec().then(() => {
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

router.get('/getOrderList', async (ctx)=>{
    const Order = mongoose.model('Order');
    await Order.find().skip(parseInt(ctx.query.start)).limit(parseInt(ctx.query.limit)).exec().then((res) => {
        ctx.body = res;
    });
});

router.get('/searchOrder', async (ctx)=>{
    const Order = mongoose.model('Order');
    var hao = new RegExp(ctx.query.search);
    await Order.find({ orderId: hao }).skip(parseInt(ctx.query.start)).limit(parseInt(ctx.query.limit)).exec().then((res) => {
        ctx.body = res;
    });
});

module.exports = router;