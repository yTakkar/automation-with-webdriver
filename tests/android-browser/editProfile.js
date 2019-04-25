const autoLogin = require('../../helpers/autoLogin');
const { URLS } = require('../../helpers');

describe('Edit Profile Page', () => {
  it('should login', async () => {
    await autoLogin();
  });

  it('should edit Family Details', async () => {
    await browser.navigateTo(URLS.PREVIEW_PROFILE);
    await browser.pause(2000);
  });
});
