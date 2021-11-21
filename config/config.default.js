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
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // CSRF enable false
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping:{
      ".html":"ejs"
    }
  }

  config.ejs = {

  }

  // config.static = {
  //   prefix:"/assets"
  // }

  return {
    ...config,
    ...userConfig,
  };
};
