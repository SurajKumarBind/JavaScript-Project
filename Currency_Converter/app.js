const API_KEY = 'YOUR-API-KEY';  // Use your generated API Key
const BASE_URL = `https://cors-anywhere.herokuapp.com/https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

const dropdowns = document.querySelectorAll("select");
const btn = document.querySelector(".get-exchange");
const fromCurr = document.querySelector(".from-currency");
const toCurr = document.querySelector(".to-currency");
const msg = document.querySelector(".msg");

const countryList = {
    USD: "United States",
    INR: "India",
    EUR: "Euro",
    GBP: "United Kingdom",
    JPY: "Japan",
    AUD: "Australia",
    CAD: "Canada",
    CHF: "Switzerland",
    CNY: "China",
    SEK: "Sweden",
    NZD: "New Zealand"
};

// Function to populate dropdowns
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.value = currCode;
        newOption.innerHTML = `
            <span class="flag-icon flag-icon-${currCode.toLowerCase()}"></span>
            ${countryList[currCode]}
        `;
        select.append(newOption);
    }
    select.value = select.classList.contains("from-currency") ? "USD" : "INR";
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value || 1;

    const from = fromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase();

    const url = `${BASE_URL}/${from}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const rate = data.conversion_rates[to];
        const finalAmount = (amtVal * rate).toFixed(2);
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        msg.innerText = "Something went wrong!";
    }
};

btn.addEventListener("click", (e) => {
    e.preventDefault();
    updateExchangeRate();
});
