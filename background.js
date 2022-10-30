chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {    
    fetch(request.url)
  .then(response => response.text())
  .then(response => sendResponse(response))//send to another javascript)
})
                                     