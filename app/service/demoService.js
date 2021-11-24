'use strict';

const Service = require('egg').Service;

class DemoService extends Service {
  async getGirl(id) {
    return {
      id, name: 'cmq', age: 18,
    };
  }

  async getBoy(id){
    return {
      id,name:'wmx',age:18
    }
  }
}

module.exports = DemoService;
