//browser should be defined in config.js 
function inject(script){
  browser.tabs.executeScript({
    code: script
  });
} 
