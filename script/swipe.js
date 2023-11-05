document.addEventListener("touchstart", handleTouchStart, false);
document.querySelector(".showCurrency").addEventListener("touchmove", handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    let firstTouches = event.touches[0];

    x1 = firstTouches.clientX;
    y1 = firstTouches.clientY;
    //console.log(x1, y1);
}

let getPx = 0;

function handleTouchMove(event) {
    if(!x1 || !y1) {
        return false;
    }

    getPx = getPx + 175;
    if(getPx > 800) {
        getPx = 0;
    }

    console.log(getPx);
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    //console.log(x2, y2);
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    let blocks = document.querySelectorAll(".showCurrency__get");
    for(let i = 0; i < blocks.length; i++)

    if(Math.abs(xDiff) > Math.abs(yDiff)) {
        if(xDiff < 0) blocks[i].style.left = -getPx + "px";
    }

    x1 = null;
    y1 = null;
}


////////////////////////////////////////////////////////////////////////////
let moveMath = 0;
function aboutSlider(event) {
    let target = event.currentTarget;
    if(!x1 || !y1) {
        return false;
    }

    moveMath = moveMath + 100;
    if(moveMath > 201) {
        moveMath = 0;
    }

    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if(Math.abs(xDiff) > Math.abs(yDiff)) {
        if(xDiff < 0) {
            target.style.left = -moveMath + "%";
        }
    }

    x1 = null;
    y1 = null;
}

let menuInSaid = document.querySelectorAll(".swipe__menu");
menuInSaid.forEach((item) => {
    item.addEventListener("touchmove", aboutSlider, false);
})





















