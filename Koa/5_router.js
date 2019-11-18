const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

router.get('/abc',(ctx,next) => {
    console.log(ctx);
    console.log(next);
    ctx.body = 'wangyibo';
});

router.get('/test',(ctx,next) => {
    console.log(ctx);
    console.log(next);
    ctx.body = 'xiaozhan';
});

app.use(router.routes());

app.use(router.allowedMethods());

app.use(async ctx => {
    ctx.body = 'mtjj';
})

app.listen(3000,() => {
    console.log('服务器启动成功在3000端口');
})