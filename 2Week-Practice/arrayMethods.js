
////////// PROBLEM 1 //////////
console.log ('-------------------------------')
console.log ('           Problem 1')

const mixedNumbers = [6,4,3,1,7,5,2,6,8,9,4,2,7,9,3,1,8,4,3];

const evenNumbers = mixedNumbers.filter(isEven => isEven % 2 === 0);
    console.log (`Even numbers: ${evenNumbers}`);

////////// PROBLEM 2 //////////
console.log ('-------------------------------')
console.log ('           Problem 2')

const prices = [15.00, 23.00, 78.00, 34.00, 12.00, 86.00, 12.00, 79.00, 32.00];

let currentTax = 7/100;
let postTaxPrices = prices.map(function (tax){
  return '$' + (tax += (1 + currentTax))
});
console.log (`Prices including tax: ${postTaxPrices}`)

////////// PROBLEM 3 //////////
console.log ('-------------------------------')
console.log ('           Problem 3')

const populations = [8175133, 3792621, 2695598, 2100263];
let totalPopulation = populations.reduce((total, people) => total + people, 0)
console.log (`Total population: ${totalPopulation}`)

// ////////// PROBLEM 4 //////////
console.log ('-------------------------------')
console.log ('           Problem 4')

const monstersInYourPocket = [{"monster":"Bulbabunny","CP":156},{"monster":"Bulbabunny","CP":135},
{"monster":"Bulbabunny","CP":250},{"monster":"Ponylopse","CP":277},{"monster":"Ponylopse","CP":184},
{"monster":"Pikadoughnet","CP":207},{"monster":"Bulbabunny","CP":139},{"monster":"Pikadoughnet","CP":47},
{"monster":"Pikadoughnet","CP":175},{"monster":"WaterHorsia","CP":26},{"monster":"Ponylopse","CP":19},
{"monster":"Pikadoughnet","CP":218},{"monster":"Charaflier","CP":101},{"monster":"WaterHorsia","CP":96},
{"monster":"Pikadoughnet","CP":253},{"monster":"Sandmush","CP":146},{"monster":"Bulbabunny","CP":247},
{"monster":"Charaflier","CP":55},{"monster":"Bulbabunny","CP":72},{"monster":"Pikadoughnet","CP":300},
{"monster":"Sandmush","CP":262},{"monster":"Sandmush","CP":25},{"monster":"Charaflier","CP":215},
{"monster":"Ponylopse","CP":125},{"monster":"Bulbabunny","CP":178}];

let myStrongest = monstersInYourPocket.filter(monsters => monsters.CP > 200)
console.log ('Monsters with CP > 200')
console.log (myStrongest)

// ////////// PROBLEM 5 //////////
console.log ('-------------------------------')
console.log ('           Problem 5')
// // Do not edit code below.
const orders = [{"price":15,"tax":0.09},{"price":42,"tax":0.07},{"price":56,"tax":0.11},
{"price":80,"tax":0.11},{"price":69,"tax":0.06},{"price":68,"tax":0.14},
{"price":72,"tax":0.14},{"price":51,"tax":0.09},{"price":89,"tax":0.15},
{"price":48,"tax":0.13}];

let mapOrder = orders.map(function tax (orders){
return '$' + (orders.price + orders.tax)
})
console.log ('Order totals: ')
console.log (mapOrder)

console.log ('-------------------------------')
console.log ('           Problem 6')

const purchases = [{"owner":"Barry","price":103},{"owner":"Bob","price":75},
{"owner":"Bob","price":73},{"owner":"Barry","price":57},{"owner":"Barry","price":128},
{"owner":"Bob","price":119},{"owner":"Barry","price":133},{"owner":"Barry","price":27},
{"owner":"Barry","price":138},{"owner":"Bob","price":68},{"owner":"Bob","price":50},
{"owner":"Barry","price":9},{"owner":"Bob","price":123},{"owner":"Bob","price":135},
{"owner":"Barry","price":30},{"owner":"Barry","price":129},{"owner":"Barry","price":38},
{"owner":"Bob","price":133},{"owner":"Barry","price":109},{"owner":"Bob","price":115}];

let total = purchases.filter(arr => arr.owner === "Bob")
let bobsTotal = total.reduce((acc,cur) => acc + cur.price, 0)
console.log ("Bob's total cost: ")
console.log (`$${bobsTotal}.00`)