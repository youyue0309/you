const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
const fs = require('fs');


router.get('/insertProductInfo', async (ctx) => {
    fs.readFile('./data/product.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        console.log(data);
        let count = 0;//计数器
        const Product = mongoose.model('Product');
        data.map((value, index) => {
            console.log(value);
            let product = new Product(value);
            //随机生成类型 1-8
            product.type = Math.floor(Math.random() * 8) + 1;
            product.price = (Math.random() * (20 - 1) + 1).toFixed(2);
            product.save().then(() => {
                count++;
                console.log('成功')
            }).catch((err) => {
                console.log('失败了' + error);
            });
        });
    });
    ctx.body = "导入数据";
});

router.get('/getProductsByType', async (ctx) => {
    const Product = mongoose.model('Product');
    await Product.find({ type: ctx.query.typeId }).skip(parseInt(ctx.query.start)).limit(parseInt(ctx.query.limit)).exec().then((res) => {
        ctx.body = res;
    });
});

router.get('/getProductsByProvince', async (ctx) => {
    const Product = mongoose.model('Product');
    var name = new RegExp(ctx.query.provinceName);
    await Product.find({ city: name }).skip(parseInt(ctx.query.start)).limit(parseInt(ctx.query.limit)).exec().then((res) => {
        ctx.body = res;
    });
});

router.get('/getProductList', async (ctx) => {
    const Product = mongoose.model('Product');
    await Product.find().skip(parseInt(ctx.query.start)).limit(parseInt(ctx.query.limit)).exec().then((res) => {
        ctx.body = res;
    });
});

//搜索商品
router.get('/searchProduct', async (ctx) => {
    const Product = mongoose.model('Product');
    var name = new RegExp(ctx.query.search);
    await Product.find({ product: name }).skip(parseInt(ctx.query.start)).limit(parseInt(ctx.query.limit)).exec().then((res) => {
        ctx.body = res;
    });
});

router.get('/getDetail', async (ctx) => {
    const Product = mongoose.model('Product');
    await Product.findOne({_id: ctx.query.id}).exec().then(res => {
        ctx.body = res;
    });
});

//添加商品
router.post('/addProduct', async (ctx) => {
    const Product = mongoose.model('Product');
    let newProduct = new Product(ctx.request.body);
    await newProduct.save().then(() => {
        ctx.body = {
            code: 200,
            message: '添加成功'
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            message: err
        }
    });
});

//修改
router.get('/updateProduct', async (ctx) => {
    const Product = mongoose.model('Product');
    // console.log(ctx);
    await Product.findByIdAndUpdate(ctx.query.id, {
        $set: {
            product: ctx.query.product,
            high: ctx.query.high,
            r: ctx.query.r,
            city: ctx.query.city,
            img: ctx.query.img,
            productsum: ctx.query.productsum,
            type: parseInt(ctx.query.type),
            price: parseInt(ctx.query.price)
        }
    }, { new: true }).exec().then((res) => {
        // console.log(res);
        ctx.body = res;
    });
});

router.post('/delProduct', async (ctx)=>{
    const Product = mongoose.model('Product');
    await Product.deleteOne({_id: ctx.query.id}).exec().then(() => {
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