# Reports
Let's have a look at reporting section of this POC project. We're using the awesome [Allure](https://demo.qameta.io/allure/) reporter.

![alt text](https://webdriver.io/img/allure.png)

### Requirements
First install `allure`

OSX
```bash
brew tap qameta/allure
brew install allure
```

Debian
```bash
sudo apt-add-repository ppa:yandex-qatools/allure-framework
sudo apt-get update
sudo apt-get install allure-commandline
```

To make sure it's properly installed, run
```bash
allure help
```

### Usage

When you run your preferred `test` command, such as
`yarn test:browser`
`yarn test:android-browser`
`yarn test:android-app`

Your automated test results are auto-generated in `allure/results` directory. Now to generate reports from these results, run
```bash
yarn report:gen
```

When reports are generated in `allure/reports` directory, run the below command to view them
```bash
yarn report:open
```

### A frequent error
When you run `allure help` to verify allure's installation, you may get the following error.

> ERROR: JAVA_HOME is set to an invalid directory: /usr/bin/java. Please set the JAVA_HOME variable in your environment to match the location of your Java installation.

To solve it, follow these steps
```bash
readlink -f $(which java) # /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
```

Run `allure help` again to double verify.
