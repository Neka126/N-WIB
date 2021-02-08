var browser = chrome;
function set(vari,value){browser.storage.sync.set({vari:value})}
function get(vari){return browser.storage.sync.get([vari])}
chrome.browserAction.onClicked.addListener(function(tab) {
var d = tab.url;
  window.open("pop.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=250,height=100")
});
function colorfy(color){


}
function icon(name){
chrome.browserAction.setIcon({path: "icons/"+name+".png"});
}