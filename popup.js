chrome.tabs.query({
    'active': true, 
    'windowId': chrome.windows.WINDOW_ID_CURRENT
  }, 
  function(tab) {
    chrome.tabs.create({url: "https://outline.com/" + tab[0].url});
  }
);