/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1637477611174_2633';

  // add your middleware config here
  config.middleware = ['counter'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // CSRF enable false
  config.security = {
    csrf:{
      enable:false
    },
    // domainWhiteList:['http://127.0.0.1:3000','http://127.0.0.1:3001','http://127.0.0.1:7000','http://127.0.0.1:7001']
    domainWhiteList:['*']
  }

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  config.ejs = {

  };

  config.session = {
    key:"SESSION",
    renew:true,
    maxAge:60*1000
  }

  config.mysql = {
    app:true,     //是否挂载到app下面
    agent:false,  //是否挂载到代理下面
    client:{
      host:'127.0.0.1',      // 数据库地址
      port:'3306',           // 端口
      user:'root',           // 用户名
      password:'081021gamewmx',    // 密码
      database:'test-egg'    // 连接的数据库名称
    }
  }

  config.validate = {
    convert: true,
    locale: 'zh-cn',
    throwError: false
  }

  // config.static = {
  //   prefix:"/assets"
  // }

  return {
    ...config,
    ...userConfig,
  };
};
