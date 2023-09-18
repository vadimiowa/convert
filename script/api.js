/* API application */
const course = {};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');
const elementPLN = document.querySelector('[data-value="PLN"]');
const elementSEK = document.querySelector('[data-value="SEK"]');
const elementCHF = document.querySelector('[data-value="CHF"]');
const elementMXN = document.querySelector('[data-value="MXN"]');

async function getCurrency() {
    const results = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
    const data = await results.json();
    const currency = await data;

    course.USD = currency[24];
    course.EUR = currency[31];
    course.GBP = currency[23];
    course.PLN = currency[32];
    course.SEK = currency[20];
    course.CHF = currency[21];
    course.MXN = currency[13];

    console.log(course);

    elementUSD.textContent = course.USD.rate.toFixed(2);
    elementEUR.textContent = course.EUR.rate.toFixed(2);
    elementGBP.textContent = course.GBP.rate.toFixed(2);
    elementPLN.textContent = course.PLN.rate.toFixed(2);
    elementSEK.textContent = course.SEK.rate.toFixed(2);
    elementCHF.textContent = course.CHF.rate.toFixed(2);
    elementMXN.textContent = course.MXN.rate.toFixed(2);

    if(course.rate > course.previous) {
        elementUSD.classList.add("top");
        elementEUR.classList.add("top");
        elementGBP.classList.add("top");
        elementPLN.classList.add("top");
        elementSEK.classList.add("top");
        elementCHF.classList.add("top");
        elementMXN.classList.add("top");
    } else {
        elementUSD.classList.add("bottom");
        elementEUR.classList.add("bottom");
        elementGBP.classList.add("bottom");
        elementPLN.classList.add("bottom");
        elementSEK.classList.add("bottom");
        elementCHF.classList.add("bottom");
        elementMXN.classList.add("bottom");
    }
}

getCurrency();























