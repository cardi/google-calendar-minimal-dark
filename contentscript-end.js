(function(){

var inject  = document.createElement("link");
inject.href = chrome.extension.getURL("Style.css");
inject.id   = "css-dark-theme";
inject.rel  = "stylesheet";
inject.type = "text/css";

document.getElementsByTagName("head")[0].appendChild(inject);

window.addEventListener("keydown", toggleStyle, false);
function toggleStyle(e) {
  // 'O' (shift + o)
  if (e.shiftKey && e.keyCode == 79 && e.target.nodeName != "INPUT") {
    var css = document.getElementById("css-dark-theme");
    css.disabled = css.disabled ^ 1;
  } 
}

})();
