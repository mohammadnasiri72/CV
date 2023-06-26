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
window.addEventListener("scroll", function () {
    if ((progressHtml.getClientRects()[0].top - window.innerHeight) < -20) {
        barHtml.style.width = "95%"
    }
    if ((progressHtml.getClientRects()[0].top - window.innerHeight) > -20) {
        barHtml.style.width = "50%"
    }
    if ((progressCss.getClientRects()[0].top - window.innerHeight) < -20) {
        barCss.style.width = "90%"
    }
    if ((progressCss.getClientRects()[0].top - window.innerHeight) > -20) {
        barCss.style.width = "40%"
    }
    if ((progressJs.getClientRects()[0].top - window.innerHeight) < -20) {
        barJs.style.width = "90%"
    }
    if ((progressJs.getClientRects()[0].top - window.innerHeight) > -20) {
        barJs.style.width = "30%"
    }
    if ((progressJq.getClientRects()[0].top - window.innerHeight) < -20) {
        barJq.style.width = "95%"
    }
    if ((progressJq.getClientRects()[0].top - window.innerHeight) > -20) {
        barJq.style.width = "50%"
    }
    if ((progressNpm.getClientRects()[0].top - window.innerHeight) < -20) {
        barNpm.style.width = "90%"
    }
    if ((progressNpm.getClientRects()[0].top - window.innerHeight) > -20) {
        barNpm.style.width = "40%"
    }
    if ((progressReact.getClientRects()[0].top - window.innerHeight) < -20) {
        barReact.style.width = "80%"
    }
    if ((progressReact.getClientRects()[0].top - window.innerHeight) > -20) {
        barReact.style.width = "30%"
    }
})
var iconDownMain = document.querySelector(".icon-down-main-img")
iconDownMain.addEventListener("click", function () {
    window.location = "#about"
})

var iconRightSliderPortfolio = document.querySelector(".icon-right-slider-portfolio")
var iconLeftSliderPortfolio = document.querySelector(".icon-left-slider-portfolio")
var portfolioBox = document.querySelectorAll(".p-portfolio")
var flagSliderPortfolio = 0
var widthBSld = ""
var widthBSld2 = 0
portfolioBox.forEach(function (ev) {
    var styBSld = window.getComputedStyle(ev)
    widthBSld = parseFloat(styBSld.getPropertyValue("width"))
})

var x = portfolioBox.length - 3
var y = 0
widthBSld2 = widthBSld + widthBSld2

iconRightSliderPortfolio.addEventListener("click", function () {
    if (x > y) {
        y = y + 1
        if (flagSliderPortfolio == 0) {
            portfolioBox.forEach(function (ev) {
                ev.style.transform = `translateX(${-(widthBSld2 + 50)}px)`
            })
            flagSliderPortfolio = 1
            widthBSld2 = widthBSld + widthBSld2 + 50
        } else if (flagSliderPortfolio == 1) {
            portfolioBox.forEach(function (ev) {
                ev.style.transform = `translateX(${-(widthBSld2 + 50)}px)`
            })
            flagSliderPortfolio = 0
            widthBSld2 = widthBSld + widthBSld2 + 50
        }
    }
    if (x == y) {
        iconRightSliderPortfolio.style.opacity = "0.2"
    }
    if (x != y) {
        iconRightSliderPortfolio.style.opacity = "1"
    }
    if (y != 0) {
        iconLeftSliderPortfolio.style.opacity = "1"
    }
    if (y == 0) {
        iconLeftSliderPortfolio.style.opacity = "0.2"
    }
})

iconLeftSliderPortfolio.addEventListener("click", function () {
    if (y > 0) {
        y = y - 1
        if (flagSliderPortfolio == 0) {
            portfolioBox.forEach(function (ev) {
                ev.style.transform = `translateX(${(-(widthBSld2) + 2 * widthBSld + 50)}px)`
            })
            flagSliderPortfolio = 1
            widthBSld2 = widthBSld2 - widthBSld - 50
        } else if (flagSliderPortfolio == 1) {
            portfolioBox.forEach(function (ev) {
                ev.style.transform = `translateX(${(-(widthBSld2) + 2 * widthBSld + 50)}px)`
            })
            flagSliderPortfolio = 0
            widthBSld2 = widthBSld2 - widthBSld - 50
        }
    }
    if (x == y) {
        iconRightSliderPortfolio.style.opacity = "0.2"
    }
    if (x != y) {
        iconRightSliderPortfolio.style.opacity = "1"
    }
    if (y != 0) {
        iconLeftSliderPortfolio.style.opacity = "1"
    }
    if (y == 0) {
        iconLeftSliderPortfolio.style.opacity = "0.2"
    }
})
var mas = document.querySelector(".mas")
var txt = document.querySelector(".txt-mas")
var txt2 = document.querySelector(".txt-mas2")

setTimeout(function (e) {
    mas.style.bottom = "100%"
    txt.style.display = "none"
    txt2.style.display = "none"
}, 2000)
setTimeout(function (e) {
    txt.style.top = "-100%"
    txt2.style.top = "-100%"
}, 1500)


var dokmeh = document.querySelector(".form-check-input")
var txtDokmeh = document.querySelector(".form-check-label")
var txtWhite = document.querySelectorAll(".white")
var bgDoodi = document.querySelectorAll(".bg-doodi")
var blackLight = document.querySelectorAll(".black-light")
var bgBlackLight = document.querySelectorAll(".bg-black-light")

var flagDokmeh = 0
dokmeh.addEventListener("click", function () {
    if (flagDokmeh == 0) {
        document.body.style.backgroundColor = "white"
        txtDokmeh.innerHTML = "روشن"
        txtWhite.forEach(function (ev) {
            ev.classList.remove("white")
            ev.classList.add("doodi")
        })
        bgDoodi.forEach(function (ev) {
            ev.classList.add("bg-white")
            ev.classList.remove("bg-doodi")
        })
        blackLight.forEach(function (ev) {
            ev.classList.add("white-light")
            ev.classList.remove("black-light")
        })
        bgBlackLight.forEach(function (ev) {
            ev.classList.add("bg-white-light")
            ev.classList.remove("bg-black-light")
        })
        flagDokmeh = 1
    } else if (flagDokmeh == 1) {
        document.body.style.backgroundColor = "rgb(27, 27, 27)"

        txtDokmeh.innerHTML = "تاریک"
        txtWhite.forEach(function (ev) {
            ev.classList.remove("doodi")
            ev.classList.add("white")
        })
        bgDoodi.forEach(function (ev) {
            ev.classList.add("bg-doodi")
            ev.classList.remove("bg-white")
        })
        blackLight.forEach(function (ev) {
            ev.classList.add("black-light")
            ev.classList.remove("white-light")
        })
        bgBlackLight.forEach(function (ev) {
            ev.classList.remove("bg-white-light")
            ev.classList.add("bg-black-light")
        })



        flagDokmeh = 0
    }
})


var palet = document.querySelector(".palet")
var boxColor = document.querySelector(".box-color")
var iconClosePalet = document.querySelector(".icon-close-palet")
palet.addEventListener("click" , function(){
    boxColor.style.transform = "scale(1)"
})
iconClosePalet.addEventListener("click" , function(){
    boxColor.style.transform = "scale(0)"
})

var colorPalet = document.querySelectorAll(".color-palet")
colorPalet.forEach(function(ev){
    ev.addEventListener("click" , function(){
        var setColor = ev.getAttribute("data-color")
        var blu = document.querySelectorAll(".blue")
        var bgBlu = document.querySelectorAll(".bg-blue")
        blu.forEach(function(ev){
            ev.style.color = setColor
            ev.style.borderColor = setColor
        })
        bgBlu.forEach(function(ev){
            ev.style.backgroundColor = setColor
        })
    })
    
})









