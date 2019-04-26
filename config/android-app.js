const sharedConfig = require('./shared');
const { resolvePath } = require('../helpers');

exports.config = {
  ...sharedConfig,
  specs: ['./tests/android-app/*.js'],
  path: '/wd/hub',
  port: 4723,
  capabilities: [
    {
      automationName: 'UiAutomator2',
      deviceName: 'Pixel 2 API 28',
      platformName: 'Android',
      platformVersion: '9',
      maxInstances: 1,
      app: resolvePath('apps/sangam.apk'),
      orientation: 'PORTRAIT',
      noReset: true,
    },
  ],
};
