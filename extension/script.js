chrome.storage.local.get('enabled', data => {
  if (data.enabled === false) {
    return;
  }

  const swiftElement = document.querySelector('[data-language="swift"]');

  if (swiftElement) {
    location = swiftElement.parentNode.nextSibling.querySelector('a').href;
  }
});
