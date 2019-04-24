(async () => {
  const { remote } = require('webdriverio')

  const browser = await remote({
    logLevel: 'error',
    path: '/',
    capabilities: {
      browserName: 'firefox'
    }
  })

  await browser.url('https://webdriver.io')

  const title = await browser.getTitle()
  console.log('Title was: ' + title)

  await browser.deleteSession()
})().catch(console.error)

