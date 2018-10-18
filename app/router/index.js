'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  app.router.get('/', 'home.render');
  app.router.get('/user', 'user.admin');


  
  const localStrategy = app.passport.authenticate('local');
  app.router.post('/passport', localStrategy);

  app.router.get('/logout', 'user.logout');

  // 挂载鉴权路由
  app.passport.mount('github')
};
