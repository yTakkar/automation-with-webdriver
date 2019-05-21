const sharedConfig = require('./shared');
const { resolvePath } = require('../helpers');

exports.config = {
  ...sharedConfig,
  specs: ['./tests/ios-app/*.js'],
  path: '/wd/hub',
  port: 4723,
  capabilities: [
    {
      deviceName: 'iPhone X',
      platformName: 'iOS',
      platformVersion: '12.2',
      maxInstances: 1,
      app: resolvePath('apps/app.zip'),
      orientation: 'PORTRAIT',
      noReset: true,
      newCommandTimeout: 240,
    },
  ],
};
