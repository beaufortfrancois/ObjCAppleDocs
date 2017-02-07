chrome.browserAction.onClicked.addListener(_ => {
  chrome.storage.local.get('enabled', data => {
    if (data.enabled === false) {
      chrome.browserAction.setIcon({ path:'icon48.png' });
      chrome.storage.local.set({ enabled: true });
    } else {
      chrome.browserAction.setIcon({ path:'icon-disabled48.png' });
      chrome.storage.local.set({ enabled: false });
    }
  });
});
