// Must be loaded in the manifest file >> matches
// "js": ["js/jquery-2.2.1.min.js", "js/content.js"]


// // var firstHref = $("a[href^='http']").eq(0).attr("href");
//
// console.log(url);

// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var url = window.location.href;     // Returns full URL

      console.log(url);
    }
  }
);
