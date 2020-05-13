const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const fs = require('fs');

router.get('/insertAdmin', async (ctx) => {
    fs.readFile('./data/admin.json', 'utf8', (err,data)=>{
        data = JSON.parse(data);
        let count = 0;//计数器
        const Admin = mongoose.model('Admin');
        data.map((value, index) => {
            let admin= new Admin(value);
            admin.save().then(()=>{
                count++;
                console.log('成功'+count);
            }).catch((err)=>{
                console.log('失败了' + error);
            });
        });
    });
    ctx.body = "导入管理员";
});

module.exports = router;