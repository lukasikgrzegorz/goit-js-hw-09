!function(){var t;btnStart=document.querySelector("[data-start]"),btnStop=document.querySelector("[data-stop]"),btnStop.setAttribute("disabled",""),btnStart.addEventListener("click",(function(){t=setInterval((function(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),btnStart.setAttribute("disabled",""),btnStop.removeAttribute("disabled")})),btnStop.addEventListener("click",(function(){clearInterval(t),btnStart.removeAttribute("disabled"),btnStop.setAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.36d0a396.js.map
