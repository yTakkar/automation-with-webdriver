const { URLS } = require('./index');

const autoLogin = async () => {
  await browser.url(URLS.LOGIN);

  await browser.pause(2000);

  const username = await $('//*[@type="email"]');
  const password = await $('//*[@type="password"]');
  const button = await $('button#loginButton');

  await username.setValue('faiyaz.s@peopleinteractive.in');
  await password.setValue('0303');
  await button.click();
  await browser.pause(3000);
};

module.exports = autoLogin;
