const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const path = require('path');

app.use(views(path.join(__dirname,'/views'),{
    extension: 'ejs'
}))

app.use(async ctx => {
    let title = "hello wangyibo";
    await  ctx.render('index',{
        title,
        list: [
            {
                name: 'aa' , age: 22
            },
            {
                name: 'html' , age: 52
            },
            {
                name: 'css' , age: 85
            },
            {
                name: 'js' , age: 21
            }
        ]
    });
})


app.listen(3000,() => {
    console.log('服务器开启成功在3000端口');
});