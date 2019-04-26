const sharedConfig = require('./shared');

exports.config = {
  ...sharedConfig,
  path: '/',
  port: 9515,
  specs: ['./tests/browser/*.js'],
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
    },
  ],
};
