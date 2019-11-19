const companies = [
  { name: "amazon", category: "Online", start: 1990, end: 2019 },
  { name: "flipkart", category: "online", start: 2000, end: 2050 },
  { name: "mahindra", category: "motor", start: 1980, end: 2070 },
  { name: "hdfc", category: "bank", start: 1994, end: 2049 },
  { name: "mircosoft", category: "technology", start: 1970, end: 2050 },
  { name: "intel", category: "software", start: 1990, end: 2040 },
  { name: "flipkart", category: "online", start: 1920, end: 2060 },
  { name: "tata", category: "motor", start: 1940, end: 2092 },
  { name: "axis", category: "bank", start: 1994, end: 2049 },
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

let canDrink = [];
for (i = 0; i < age.length; i++) {
  if (age[i] <= 18) {
    canDrink.push(age[i]);
  }
}
console.log(canDrink);
