let t;btnStart=document.querySelector("[data-start]"),btnStop=document.querySelector("[data-stop]"),btnStop.setAttribute("disabled",""),btnStart.addEventListener("click",(()=>{t=setInterval((()=>document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3),btnStart.setAttribute("disabled",""),btnStop.removeAttribute("disabled")})),btnStop.addEventListener("click",(()=>{clearInterval(t),btnStart.removeAttribute("disabled"),btnStop.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.f51ba48d.js.map