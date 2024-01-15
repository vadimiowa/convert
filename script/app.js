const input = document.querySelector(".input");
const selector = document.querySelector(".selector");
const resualt = document.querySelector(".resualt");

input.addEventListener("input", function() {
    resualt.value = parseFloat(input.value) * course[selector.value].rate.toFixed(2);
})

resualt.addEventListener("input", function() {
    input.value = parseFloat(resualt.value) / course[selector.value].rate.toFixed(2);
})

selector.addEventListener("change", function() {
    resualt.value = parseFloat(input.value) * course[selector.value].rate.toFixed(2);
})




/* input.addEventListener("input", function() {
    const ua = Number(input.value);
    const currency = selector.value;
    const show = convert(ua, currency);

    resualt.value = show;
})

selector.addEventListener("change", function() {
    const ua = Number(input.value);
    const currency = selector.value;
    const show = convert(ua, currency);

    resualt.value = show;
}) */


/* POP UP */

let popUpContent = document.querySelector(".popUpContent");
let popUpBottomUsd = document.querySelector(".popUp__inform").addEventListener("click", function() {
    popUpContent.classList.add("active");
});

popUpContent.addEventListener("click", function() {
    popUpContent.classList.remove("active");
})

let popUpContentEur = document.querySelector(".popUpContent_EUR");
let popUpBottomEur = document.querySelector("#informEUR").addEventListener("click", function() {
    popUpContentEur.classList.add("active");
})

popUpContentEur.addEventListener("click", function() {
    popUpContentEur.classList.remove("active");
})

let popUpContentPln = document.querySelector(".popUpContent_PLN");
let popUpBottomPln = document.querySelector("#informPLN").addEventListener("click", function() {
    popUpContentPln.classList.add("active");
})

popUpContentPln.addEventListener("click", function() {
    popUpContentPln.classList.remove("active");
})


let slid = document.querySelector(".slider");
let bottomSlid = document.querySelector(".bottomSlider");
let back = document.querySelector(".burger__background_two");

bottomSlid.addEventListener("click", function() {
    slid.classList.toggle("active");
    bottomSlid.classList.toggle("active");
    back.classList.toggle("active");
});

back.addEventListener("click", function() {
    slid.classList.remove("active");
    bottomSlid.classList.remove("active");
    back.classList.remove("active");
})
















