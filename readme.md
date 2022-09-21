## About project 🙌🏻
#### [Here is link on tested website.](https://telnyx.com)
#### Described features Main page & Login form. 
#### Github Actions works every push\pull-request
#### Github Pages with allure html report provided

---
###🎬 Dependencies:
```
- "@wdio/allure-reporter": "^7.24.0"
- "@wdio/cli": "^7.24.0"
- "@wdio/local-runner": "^7.24.0"
- "@wdio/mocha-framework": "^7.24.0"
- "@wdio/selenium-standalone-service": "^7.24.0"
- "chromedriver": "^105.0.0"
- "wdio-chromedriver-service": "^7.3.2"
```
---
## How to install 💻 
#### 1) Open terminal & clone repository
```
git clone https://github.com/MarkusLarson/wdio-crossbrowser.git
```
#### 2) In the same folder in terminal:
```
npm install
```
---
## How to run tests👌🏽
```
npm run wdio
#runs all tests in Chrome&Firefox browser 

npm run Chrome
#runs all tests in Chrome browser in headless mode

npm run Firefox
#runs all tests in Firefox brower in headless mode

npm run loginChrome
#runs login spec file in chrome browser

npm run mainPageChrome
#run mainpage spec file in chrome browser

npm run loginFirefox
#runs login spec file in chrome browser

npm run mainPageFirefox
#runs mainpage spec file in chrome browser
```
---
## Link on HTML report👀
[Watch HTML report](https://markuslarson.github.io/wdio-crossbrowser/)
