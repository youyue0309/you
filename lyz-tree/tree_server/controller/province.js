const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
const fs = require('fs');

router.get('/insertProvince', async (ctx) => {
    fs.readFile('./data/province.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        console.log(data);
        let count = 0;//计数器
        const Province = mongoose.model('Province');
        data.map((value, index) => {
            console.log(value);
            let province = new Province(value);
            province.save().then(() => {
                count++;
                console.log('成功' + count);
            }).catch((err) => {
                console.log('失败了' + error);
            });
        });
    });
    ctx.body = "导入省份";
});

router.get('/getProvinceId', async (ctx) => {
    const Province = mongoose.model('Province');
    await Province.find({}).exec().then(res => {
        ctx.body = res;
    })
});

module.exports = router;
