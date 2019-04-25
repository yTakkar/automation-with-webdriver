const autoLogin = require('../helpers/autoLogin');
const { URLS } = require('../helpers');

describe('Sangam.com Matches Page', () => {
  it('should login', async () => {
    await autoLogin();
  });

  it('should open matches page', async () => {
    browser.navigateTo(URLS.MATCHES);
    const profileCard = await $('#self-card');
    await profileCard.waitForExist(5000);
  });
});
