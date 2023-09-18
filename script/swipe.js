document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

const swipeObject = document.querySelector(".showCurrency");

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    let firstTouches = event.touches[0];

    x1 = firstTouches.clientX;
    y1 = firstTouches.clientY;
    //console.log(x1, y1);
}

function handleTouchMove(event) {
    if(!x1 || !y1) {
        return false;
    }

    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    //console.log(x2, y2);
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    let blocks = document.querySelectorAll(".showCurrency__get");
    for(let i = 0; i < blocks.length; i++)

    if(Math.abs(xDiff) > Math.abs(yDiff)) {

        if(xDiff < 0) blocks[i].style.left = "-500px";
        else blocks[i].style.left = "0px";

    } else {

        /* if(yDiff > 0) swipeObject.textContent = ("top");
        else swipeObject.textContent = ("down"); */

    }

    x1 = null;
    y1 = null;
}
