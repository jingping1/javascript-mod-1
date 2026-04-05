
const year = parseInt(prompt("Enter a year:"));

let isLeapYear = false;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    isLeapYear = true;
}

let message = "";
if (isLeapYear) {
    message = year + " is a leap year.";
} else {
    message = year + " is not a leap year.";
}

document.querySelector('#target').innerHTML = message;