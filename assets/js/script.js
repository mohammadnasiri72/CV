var progressHtml = document.querySelector(".progress-bar-html")
var progressCss = document.querySelector(".progress-bar-css")
var progressJs = document.querySelector(".progress-bar-js")
var barHtml = document.querySelector(".bar-html")
var barCss = document.querySelector(".bar-css")
var barJs = document.querySelector(".bar-js")
var progressJq = document.querySelector(".progress-bar-jq")
var progressNpm = document.querySelector(".progress-bar-npm")
var progressReact = document.querySelector(".progress-bar-react")
var barJq = document.querySelector(".bar-jq")
var barNpm = document.querySelector(".bar-npm")
var barReact = document.querySelector(".bar-react")
window.addEventListener("scroll" , function(){
    if ((progressHtml.getClientRects()[0].top - window.innerHeight) <-20) {
       barHtml.style.width = "95%"
    }
    if ((progressHtml.getClientRects()[0].top - window.innerHeight) >-20) {
        barHtml.style.width = "60%"
    }
    if ((progressCss.getClientRects()[0].top - window.innerHeight) <-20) {
        barCss.style.width = "90%"
     }
     if ((progressCss.getClientRects()[0].top - window.innerHeight) >-20) {
         barCss.style.width = "50%"
     }
     if ((progressJs.getClientRects()[0].top - window.innerHeight) <-20) {
        barJs.style.width = "90%"
     }
     if ((progressJs.getClientRects()[0].top - window.innerHeight) >-20) {
         barJs.style.width = "40%"
     }
     if ((progressJq.getClientRects()[0].top - window.innerHeight) <-20) {
        barJq.style.width = "95%"
     }
     if ((progressJq.getClientRects()[0].top - window.innerHeight) >-20) {
         barJq.style.width = "60%"
     }
     if ((progressNpm.getClientRects()[0].top - window.innerHeight) <-20) {
         barNpm.style.width = "90%"
      }
      if ((progressNpm.getClientRects()[0].top - window.innerHeight) >-20) {
          barNpm.style.width = "50%"
      }
      if ((progressReact.getClientRects()[0].top - window.innerHeight) <-20) {
         barReact.style.width = "80%"
      }
      if ((progressReact.getClientRects()[0].top - window.innerHeight) >-20) {
          barReact.style.width = "40%"
      }
})
var iconDownMain = document.querySelector(".icon-down-main-img")
iconDownMain.addEventListener("click" , function(){
    window.location = "#about"
})



















