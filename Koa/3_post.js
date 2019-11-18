const Koa = require('koa');
const app = new Koa();

app.use(async ctx =>{
    let data = '';
    ctx.req.on('data',chunk => {
        data += chunk;
    });

    ctx.req.on('end',() => {
        data = decodeURI(data);
        console.log(data);
    });
    ctx.body = '123';
});

app.listen(3000, () => {
    console.log('服务期开启成功在3000端口');
});