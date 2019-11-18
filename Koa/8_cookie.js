const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    if(ctx.url=='/weichuang'){
        ctx.cookies.set(
            'name','weichuang',{
                domain: 'localhost',
                path: '/weichuang',
                maxAge: 24 * 60 * 60 * 1000,
                expires: new Date('2019-11-18'),
                httpOnly: false,
                overwrite: false 
            }
        );
        ctx.body = 'cookie success';
    }else{
        ctx.body = 'no cookie';
    }
});

app.listen(3000,() => {
    console.log('服务器开启成功在3000端口');
});