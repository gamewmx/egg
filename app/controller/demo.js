// RESTful Controller
// HTML 根据URL不同 渲染HTML
// 代理服务器

'use strict';

const Controller = require('egg').Controller;

class DemoController extends Controller {

  async index() {
    const { ctx ,app } = this;
    await ctx.render('demo.html', {
      time:app.TimeAttr,
      id: ctx.query.id,
      name: 'cmq',
      age: 18,
      skills: [ 'kill', 'heart' ],
      counter:ctx.session.counter
    });
  }

  async getGirls() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>陈曼琦</h1>');
      }, 5000);
    });
  }
  // 自由传参模式
  async getGirl() {
    const { ctx } = this;
    const res = await ctx.service.demoService.getGirl('04');
    const result = await ctx.service.demoService.getBoy('21');
    ctx.body = {res,result};
  }

  // 严格传参模式
  async getBoy() {
    const { ctx } = this;
    ctx.body = '大哥你好，我是:' + ctx.params.name + ',今年' + ctx.params.age + '岁';
  }

  // post请求
  async add() {
    const ctx = this.ctx;
    ctx.cookies.set("user","wmx",{
      maxAge:1000*60,
      httpOnly:false
    })
    ctx.session.userName = 'wmx'
    ctx.body={
      status:200,
      data:"cookie 添加成功"
    }
  }
  async del() {
    const ctx = this.ctx;
    ctx.cookies.set("user",null)
    ctx.body = {
      status: 200,
      data: "cookie 删除成功"
    };
  }
  async edit() {
    const ctx = this.ctx;
    ctx.cookies.set("user","cmq")
    ctx.session.userName = 'cmq'
    ctx.body = {
      status: 200,
      data: "cookie 修改成功",
    };
  }
  async select() {
    const ctx = this.ctx;
    // const userName =
    ctx.body = `<h1>${ctx.cookies.get('user')}</h1>`
  }

  async newContext(){
    const ctx = this.ctx;
    ctx.body = ctx.params()
  }

}

module.exports = DemoController;
