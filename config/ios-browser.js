const sharedConfig = require('./shared');

exports.config = {
  ...sharedConfig,
  path: '/wd/hub',
  port: 4723,
  specs: ['./tests/ios-browser/*.js'],
  capabilities: [
    {
      deviceName: 'iPhone X',
      platformName: 'iOS',
      platformVersion: '12.2',
      orientation: 'PORTRAIT',
      maxInstances: 1,
      browserName: 'safari',
      newCommandTimeout: 240,
    },
  ],
};
