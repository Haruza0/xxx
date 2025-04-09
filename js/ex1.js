// console.log('Hello World')
// document.querySelector('h1').innerHTML = 'Hello CPE'

// var k = 3
// console.log('k = %d',k)
// {
//     var k =2
//     console.log('k = %d',k)
// }
// console.log('k = %d', k)

// leapYear = (Year) => {
//     if (Year%400 == 0 || (Year%100!=0 && Year % 4 == 0)) {
//         return "is leap year"
//     }else{
//         return "is not leap year"
//     }
// }

// leapYear = Year =>
//     (Year % 400 == 0 || (Year % 100 != 0 && Year % 4 == 0))
//     ? "is leap year" : "is not leap year"


// console.log("%d %s", 2004, leapYear(2004))
// console.log("%d %s", 2100, leapYear(2100))
// console.log("%d %s", 2400, leapYear(2400))

// async function convertCurrency(amount, fromCurrency, toCurrency) {
//     const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const rate = data.rates[toCurrency];
//         const convertedAmount = amount * rate;
//         return convertedAmount;
//     } catch (error) {
//         console.error("Error converting currency:", error);
//         return null; 
//     }
// }

function convert() {
    var income = parseFloat(document.getElementById("fc").value);
    var tax = 0;

    if (income <= 150000) {
        tax = 0;
    } else if (income <= 300000) {
        tax = (income - 150000) * 0.05;
    } else if (income <= 500000) {
        tax = (income - 300000) * 0.10 + 7500;
    } else if (income <= 750000) {
        tax = (income - 500000) * 0.15 + 27500;
    } else if (income <= 1000000) {
        tax = (income - 750000) * 0.20 + 65000;
    } else if (income <= 2000000) {
        tax = (income - 1000000) * 0.25 + 115000;
    } else if (income <= 5000000) {
        tax = (income - 2000000) * 0.30 + 365000;
    } else {
        tax = (income - 5000000) * 0.35 + 1265000;
    }

    document.getElementById("tc").value = tax.toFixed(2);
}
