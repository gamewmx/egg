'use strict';

const { app } = require('egg-mock/bootstrap');

describe('demoIndex ', () => {
  it('demo page:', () => {
    return app.httpRequest()
      .get('/demo')
      .expect(200)
      .expect('<h1>demo</h1>');
  });
  it('demo getGirls:', async () => {
    return app.httpRequest()
      .get('/getGirls')
      .expect(200)
      .expect('<h1>陈曼琦</h1>');
  });
});
