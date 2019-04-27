# Mobile Browser
In this section, we'll have a look on how to run automated tests on device browsers.

### Screenshot
![alt text](https://i.ibb.co/SVnxL1Y/Screenshot-from-2019-04-27-23-07-11.png)

### Requirements
To run tests on mobile browsers, WebDriver requires [appium](https://webdriver.io/docs/appium-service.html) service and bunch of other stuff. To be very honest, list is pretty long and daunting.

We'll be using [Appium Doctor](https://github.com/appium/appium-doctor) to verify everything required to run [Appium](http://appium.io/) is installed and configured properly.

Run `appium-doctor`
```bash
appium-doctor
```

If it says *`Everything looks good, bye!`*, we're good to go. If no, go ahead and install/configure everything it says. 

**Install**
- [Python](https://www.python.org/).
- [NodeJS](https://nodejs.org).
- Java (there are many options).
- [Android Studio](https://developer.android.com/studio/).
- Appium `npm i -g appium`.
- cmake `sudo apt-get install cmake`.
- opencv4nodejs `npm i -g opencv4nodejs`.
- [ffmpeg](https://ffmpeg.org/).
- `bundletool.jar`.

**Set below `environment variables`**
```bash
export ANDROID_HOME=${HOME}/Android/Sdk
export JAVA_HOME=/usr/bin/java

export PATH=$PATH:${ANDROID_HOME}/emulator
export PATH=$PATH:${ANDROID_HOME}/tools/bin
export PATH=$PATH:${ANDROID_HOME}/platform-tools
export PATH=$PATH:${ANDROID_HOME}/tools
export PATH=$PATH:$JAVA_HOME/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools/adb
export PATH=$PATH:$ANDROID_HOME/build-tools
```

As per configurations, webdriver will test every android browser-related test files found in `tests/android-browser` directory.

### Usage
Make sure you have an emulator set up. If you don't have an emulator, create one.
To create an Android emulator device, go to `Tools/AVD Manager` in Android studio.

When you got emulator device setup, open a terminal session and run
```bash
emualtor -avd <device-name>   # emulator -avd Pixel_2_API_28
```

Open another terminal and run
```bash
yarn test:android-browser
```

### Reports
Follow [this](./reports.md) documentation to know more about the report it generates.
