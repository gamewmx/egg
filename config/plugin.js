'use strict';

// /** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.validate = {
  enable: true,
  package:'egg-validate'
}

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};
exports.cors = {
  enable:true,
  package:'egg-cors'
}
exports.mysql={
  enable: true,
  package:'egg-mysql'
}
