const { URLS } = require('../../helpers');

describe('Home Page', async () => {
  it('should goto /home page', async () => {
    await browser.url(URLS.HOME);
  });
});
