// Browser/Platform detecting configeration, this should always be loaded first.
// If you want support for a specfic browser, submit an issue with the "Browser" label
function detect(){
// CHROME
  if (navigator.userAgent.indexOf("Chrome") != -1 && !(navigator.userAgent.indexOf("Edge") != -1 ||navigator.userAgent.indexOf("Edg") != -1 )) {
    return [chrome, "Chrome"]
  }
  // FIREFOX
  else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
    return [browser, "Firefox"]
  }
  // EDGE
  else if (navigator.userAgent.indexOf("Edge") != -1 ||navigator.userAgent.indexOf("Edg") != -1 ) {
    return [chrome, "Edge"]
  }
  // OTHERS
  else {
    return [null, "Unknown"]
  }
};
var config = {
  browser:detect()[1],
  browserName:detect()[2]
}
