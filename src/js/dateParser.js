const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Get the date from HTML (e.g. YYYY-MM-DD)
bDayDate = document.getElementById("bDay").innerHTML;
// dDayDate = document.getElementById("dDay").innerHTML;

// Parse the text-based date to format
const birthDate = new Date(bDayDate);
// const deathDate = new Date(dDayDate);

let birthYear = birthDate.getFullYear();
let birthMonth = months[birthDate.getMonth()];
let birthDay = birthDate.getDate();

// let deathYear = deathDate.getFullYear();
// let deathMonth = months[deathDate.getMonth()];
// let deathDay = deathDate.getDate();

let currYear = 2022;
let currMonth = 01;
let currDay = 01;

let ageYear = currYear - birthYear - 1;
// let deathAgeYear = deathYear - birthYear;

let birthMonthNum = birthDate.getMonth() + 1;
// let deathMonthNum = deathDate.getMonth() + 1;

if (birthMonthNum > currMonth && birthDay > currDay) {
  ageYear;
} else {
  ageYear++;
}

// if (deathMonthNum > birthMonthNum && deathDay > birthDay) {
//   deathAgeYear++;
// }

// Replace and display the formatted date in HTML
document.getElementById("bDay").innerHTML =
  birthMonth + " " + birthDay + ", " + birthYear;

// document.getElementById("dDay").innerHTML =
//   deathMonth + " " + deathDay + ", " + deathYear;

document.getElementById("age").innerHTML = ageYear;
// document.getElementById("death").innerHTML = deathAgeYear;
