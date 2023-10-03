const sliderLine = document.querySelector(".showCurrency");
let buttomBack = document.querySelector(".bottomShowFulse");
let buttomNext = document.querySelector(".bottomShowTrue");
let offset = 0;

buttomNext.addEventListener("click", function() {
    offset = offset + 530;
    if(offset > 531) {
        offset = 0;
    }
    sliderLine.style.right = offset + "px";
})

buttomBack.addEventListener("click", function() {
    offset = offset + 530;
    if(offset = 0) {
        offset = 0;
    }
    sliderLine.style.right = -offset + "px";
})




