# Desktop Browser
In this section, we'll be focusing on how to run automated tests powered by [webdriver](https://webdriver.io/) on desktop browsers.

### Screenshot
![alt text](https://i.ibb.co/V3tGsjd/Screenshot-from-2019-04-27-23-04-27.png)

### Configurations
WebDriver requires a driver to able to run tests on the desktop browser. It should be running on a specific port as configured in [`config/shared.js`](./config/shared.js) (Don't worry it's already configured). It could be either [chromedriver](http://chromedriver.chromium.org/) or [geckodriver](https://github.com/mozilla/geckodriver). [Here](https://github.com/christian-bromann/awesome-selenium#driver) is a list of awesome drivers available. Since this is just a POC project, we're only going to use 2 drivers (chromedriver & geckodriver).

**Make sure you have**
- A stable (LTS) NodeJS version.
- Chrome installed (only when running chromedriver).
- Firefox installed (only when running geckodriver).

As per configurations, webdriver will test every browser-related test files found in `tests/browser` directory.

##### ChromeDriver
Download chromedriver for your operating system from [here](https://chromedriver.storage.googleapis.com/index.html?path=74.0.3729.6/).

##### Geckodriver
Linux 64 bit
```bash
curl -L https://github.com/mozilla/geckodriver/releases/download/v0.21.0/geckodriver-v0.21.0-linux64.tar.gz | tar xz
```

OSX
```bash
curl -L https://github.com/mozilla/geckodriver/releases/download/v0.21.0/geckodriver-v0.21.0-macos.tar.gz | tar xz
```

If you're a windows user, download it from [here](https://github.com/mozilla/geckodriver/releases/tag/v0.24.0).

### Usage
Open a terminal, `cd` into this project and run `yarn driver:chrome` for running chromedriver. 
You could also run `yarn driver:firefox` for running geckodriver.
Keep it running.

Open a second terminal session and run
```bash
yarn test:browser
```

### Reports
Follow [this](./reports.md) documentation to know more about the report it generates.

