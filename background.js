chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("chatgpt.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
  } else {
    chrome.tabs.create({ url: "https://chatgpt.com" });
  }
});
