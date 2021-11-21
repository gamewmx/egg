// RESTful Controller
// HTML 根据URL不同 渲染HTML
// 代理服务器

'use strict';

const Controller = require('egg').Controller;

class DemoController extends Controller {

  async index() {
    const { ctx } = this;
    await ctx.render('demo.html',{
      id:ctx.query.id,
      name:'cmq',
      age:18,
      skills:['kill','heart']
    })
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
    ctx.body = res;
  }

  // 严格传参模式
  async getBoy() {
    const { ctx } = this;
    ctx.body = '大哥你好，我是:' + ctx.params.name + ',今年' + ctx.params.age + '岁';
  }

  // post请求
  async add() {
    const ctx = this.ctx;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }

}

module.exports = DemoController;
