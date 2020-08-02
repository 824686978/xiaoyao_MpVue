//  搭建服务器的核心文件

let Koa = require('koa');
let KoaRouter = require('koa-router');
let Fly=require("flyio/src/node")

let jwt = require('jsonwebtoken')

let fly=new Fly;
const app = new Koa();
const router = new KoaRouter();
// 搜索图书的接口
let datas = require('./datas/data.json');
router.get('/searchBooks', (ctx, next) => {
  let req = ctx.query.req;
  let booksArr = datas;
  // 3. 响应数据
  ctx.body = booksArr;
});

// 获取用户openId的接口
router.get('/getOpenId', async (ctx, next) => {
  // 1. 获取请求的参数
  let code = ctx.query.code;
  let appId = 'wx68fa142968a0b759';
  let appSecret = 'fdc9c5bbf23b2471d661bb11f4a4aba4';
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
  let result = await fly.get(url);
  userInfo = JSON.parse(result.data)
  let token = jwt.sign(userInfo, 'atguigu');
  console.log(token);
  ctx.body = token;
});


// 测试验证身份token的接口
router.get('/test', (ctx, next) => {
  console.log(ctx.request.header.authorization)
  let token = ctx.request.header.authorization;

  let result;
  try{
    result = jwt.verify(token, 'atguigu')
    console.log('验证结果', result);
    ctx.body = '验证成功'
  }catch (e) {
    ctx.body = '验证失败'
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen('3000', () => {
  console.log('服务器启动成功');
  console.log('服务器地址： http://localhost:3000');
})

