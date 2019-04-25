const sharedConfig = require('./shared');

exports.config = {
  ...sharedConfig,
  path: '/wd/hub',
  port: 4723,
  specs: ['./tests/android-browser/*.js'],
  capabilities: [
    {
      automationName: 'UiAutomator2',
      deviceName: 'Pixel 2 API 28',
      platformName: 'Android',
      platformVersion: '9',
      maxInstances: 1,
      browserName: 'chrome',
    },
  ],
  appium: {
    args: {
      address: '127.0.0.1',
      commandTimeout: '7200',
      sessionOverride: true,
      debugLogSpacing: true,
      chromedriverExecutable: './chromedriver',
    },
  },
};
