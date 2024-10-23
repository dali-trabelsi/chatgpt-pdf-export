document.addEventListener("DOMContentLoaded", () => {
  const messageDiv = document.getElementById("message");
  const cleanButton = document.getElementById("cleanButton");

  // Query the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (tab && tab.url.includes("chatgpt.com")) {
      // User is on ChatGPT website
      messageDiv.textContent =
        "Click the button below to export your conversation as a PDF.";
      cleanButton.classList.remove("hidden");
    } else {
      // User is not on ChatGPT website
      messageDiv.textContent =
        "Please navigate to chatgpt.com to use this extension.";
      cleanButton.classList.add("hidden");
    }
  });

  cleanButton.addEventListener("click", () => {
    // Query for the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (tab && tab.url.includes("chatgpt.com")) {
        // Inject content.js into the active tab
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"],
        });
      }
    });
  });
});
