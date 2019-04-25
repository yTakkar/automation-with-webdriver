const autoLogin = require('../helpers/autoLogin');
const { URLS } = require('../helpers');

describe('Interaction Page', async () => {
  it('should login', async () => {
    await autoLogin();
  });

  it('should navigate to interaction page', async () => {
    await browser.navigateTo(URLS.INTERACTION);
    await browser.pause(2000);
  });
});
