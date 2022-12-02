'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.session.counter)
    ctx.body = '<h1>hello World</h1>';
  }

  async helloWorld() {
    const { ctx } = this;
    console.log(ctx);
    ctx.body = '<h1>hello World</h1>';
  }

  async test() {
    const ctx = this.ctx;
    const id = ctx.query.id;
    const res = await ctx.service.demoService.getGirl(id);
    ctx.body = res;
  }

}

module.exports = HomeController;
