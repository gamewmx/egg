'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/helloWorld', controller.home.helloWorld);
  router.get('/test', controller.home.test);
  router.get('/demo', controller.demo.index);
  router.get('/getGirls', controller.demo.getGirls);
  router.get('/getGirl', controller.demo.getGirl);
  router.get('/getBoy/:name/:age', controller.demo.getBoy);
  router.post('/add', controller.demo.add);
};
