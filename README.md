# Unstalker

A handy Chrome extension that snooze-adds people on Twitter for a week or a month.

### Example:

![](http://i.imgur.com/tbd.png)

## APIs

#### feature 1

* Oauth: asks for permission to control your Twitter account so that it can follow/unfollow

#### feature 2

* chrome.alarms: for time logic

#### feature 3

* chrome.storage: for data persistance 

#### feature 4

* chrome.tabs and chrome.idle: at some point Unstalker will want to open a new tab but only when things are idle so that it doesn't interupt the user.

Example:

![](http://i.imgur.com/tbd.png)

### Installation

1. `git clone git@github.com:guilsa/unstalker.git`
2. Using **Google Chrome** browser, navigate to chrome://extensions/ and enable "Developer mode" in the upper right corner.
3. Click on the <kbd>Load unpacked extension...</kbd> button, browse to the directory you cloned to and hit confirm.

## License

MIT
