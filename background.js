chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['/src/CanvaDownloader.js']
  });
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { hostSuffix: 'canva.com', urlContains: 'view' },
            })],
          actions: [ new chrome.declarativeContent.ShowAction() ]
        }]);
    });
  });