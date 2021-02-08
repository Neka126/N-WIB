var browser = chrome;
function set(vari,value){return browser.storage.sync.set({vari:value})}
function get(vari){return browser.storage.sync.get([vari])}
