'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const counter = app.middleware.counter()
  router.get('/', controller.home.index);
  router.get('/helloWorld', controller.home.helloWorld);
  router.get('/test', controller.home.test);
  router.get('/demo',counter, controller.demo.index);
  router.get('/getGirls', controller.demo.getGirls);
  router.get('/getGirl', controller.demo.getGirl);
  router.get('/free', controller.demo.free);
  router.get('/getBoy/:name/:age', controller.demo.getBoy);
  router.get('/newContext', controller.demo.newContext);
  router.post('/add', controller.demo.add);
  router.post('/del', controller.demo.del);
  router.post('/edit', controller.demo.edit);
  router.post('/select', controller.demo.select);
  router.get("/addGirl", controller.girls.addGirl);
  router.get("/delGirl", controller.girls.delGirl);
  router.get("/updateGirl", controller.girls.updateGirl);
  router.get("/queryGirls", controller.girls.queryGirls);
};
