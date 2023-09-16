/* API application */
const course = {};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');

async function getCurrency() {
    const results = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
    const data = await results.json();
    const currency = await data;

    course.USD = currency[24];
    course.EUR = currency[31];

    console.log(course);

    elementUSD.textContent = course.USD.rate.toFixed(2);
    elementEUR.textContent = course.EUR.rate.toFixed(2);

    if(course.USD.rate > course.USD.previous) {
        elementUSD.classList.add("top");
        elementEUR.classList.add("top");
    } else {
        elementUSD.classList.add("bottom");
        elementEUR.classList.add("bottom");
    }
}

getCurrency();























