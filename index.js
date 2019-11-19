const companies = [
  { name: "amazon", category: "Online", start: 1990, end: 2019 },
  { name: "flipkart", category: "online", start: 2000, end: 2050 },
  { name: "mahindra", category: "motor", start: 1980, end: 2070 },
  { name: "hdfc", category: "bank", start: 1994, end: 2049 },
  { name: "mircosoft", category: "technology", start: 1970, end: 2050 },
  { name: "intel", category: "software", start: 1990, end: 2040 },
  { name: "ekart", category: "online", start: 1920, end: 1929 },
  { name: "tata", category: "motor", start: 1940, end: 2092 },
  { name: "axis", category: "bank", start: 1994, end: 1995 },
  { name: "infosis", category: "technology", start: 1970, end: 2013 }
];
// console.log(companies);

const age = [
  33,
  12,
  20,
  22,
  42,
  32,
  41,
  52,
  15,
  65,
  92,
  23,
  41,
  54,
  68,
  23,
  12,
  47,
  44,
  33,
  54,
  65,
  85,
  96,
  41,
  23,
  65,
  75,
  85,
  65,
  25,
  36,
  41,
  62
];

//  first using simply for loop

// for (let i = 0; i <= companies.length; i++) {
//   console.log(companies[i]);
// }  //   Using forEach

// age.forEach(function(age) {
//   console.log(age);
// });

//let canDrink = [];
// for (i = 0; i < age.length; i++) {
//   if (age[i] <= 18) {
//     canDrink.push(age[i]);
//   }
// }
// console.log(canDrink);

// let kids = [];

//                                            filter

// kids = age.filter(function(age) {
//   if (age < 18) return true;
// });

// console.log(kids);
// now using es6 one liner function or arrow function

// kids = age.filter(age => age <= 18);
// //canDrink = age.filter(age => age > 18);
// console.log(kids);

// let lastTenyear = [];

// lastTenyear = companies.filter(
//   companies => companies.start > 1950 && companies.end < 2000
// );

// console.log(lastTenyear);

let company = [];

// company = companies.filter(function(value) {
//   if (value.category === "bank") {
//     return true;
//   }
// });
// console.log(company);

// now using es6

// company = companies.filter((companies, index) => companies.category === "bank");
// console.log(company, index);

// companies who started in 1980

// let firstStart = [];

// firstStart = companies.filter(
//   companies => companies.start >= 1980 && companies.start <= 1989
// );
// console.log(firstStart);

// lasted atlest 10 years

let tenYearold = [];
tenYearold = companies.filter(
  companies => companies.end - companies.start < 10
);
console.log(tenYearold);
