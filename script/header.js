const mood = document.querySelector(".header__mood");
const body = document.querySelector("body");
const convert = document.querySelector(".convert");
const bottomNextOne = document.querySelector(".bottomShowFulse");
const bottomBackOne = document.querySelector(".bottomShowTrue");

mood.addEventListener("click", function() {
    let showCurrencyM = document.querySelectorAll(".showCurrency__get");
    showCurrencyM.forEach((e) => {
    if(mood.classList.contains("none")) {
        e.style.backgroundColor = "#737b88";
    } else {
        e.style.backgroundColor = "#201a3c";
    }
})

    let sun = document.querySelector(".header__sun");
    let moon = document.querySelector(".header__moon");

    mood.classList.toggle("none");
    if(mood.classList.contains("none")) {
        moon.style.display = "none";
        sun.style.display = "block";
        body.style.backgroundColor = "#303145";
        convert.style.backgroundColor = "#201a3c";
        mood.style.backgroundColor = "#fff";
        bottomNextOne.style.backgroundColor = "#201a3c";
        bottomBackOne.style.backgroundColor = "#201a3c";
    } else {
        moon.style.display = "block";
        sun.style.display = "none";
        body.style.backgroundColor = "#fff";
        convert.style.backgroundColor = "#737b88";
        mood.style.backgroundColor = "#737b88";
        bottomNextOne.style.backgroundColor = "#737b88";
        bottomBackOne.style.backgroundColor = "#737b88";
    }
})

let burger = document.querySelector(".burger");
let menu = document.querySelector(".burger__menu");
let menuBackground = document.querySelector(".burger__background");
let menuClouse = document.querySelector(".menu__close");


burger.addEventListener("click", function() {
    menu.classList.add("active");
    menuBackground.classList.add("active");
})

menuClouse.addEventListener("click", function() {
    menu.classList.remove("active");
    menuBackground.classList.remove("active");
})

menuBackground.addEventListener("click", function() {
    menu.classList.remove("active");
    menuBackground.classList.remove("active");
})


















