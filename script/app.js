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



















