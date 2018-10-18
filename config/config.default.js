'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539614996725_9370';

  // add your config here
  config.middleware = [];

  // 登陆验证
  exports.passportLocal={
    // usernameField: 'username',
    // passwordField: 'password',
  }

  config.passportGithub={
    key:'fb66526076e77b332d60',
    secret:'4d136aada7e909ee100fa2619d9a0aecfc581da5'
  }

  return config;
};
