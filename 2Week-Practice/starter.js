////////////////////////
////// CALCULATOR //////
////////////////////////

function add (num1, num2) {
return num1 + num2
}
function subtract (num1, num2 ) {
  return num1 - num2
}
function multiply (num1, num2) {
  return num1 * num2
}
function divide (num1, num2) {
  return num1 / num2
}

function calculator (num1, num2, callback) {
if (+num1 && +num2){
num1 = +num1
num2 = +num2
return callback(num1, num2)
} else {
  return 'Send numbers only!'
}
}
console.log(calculator(6,'4', add))
console.log(calculator(45,346, multiply))
console.log(calculator(6,36, subtract))
console.log(calculator(2,45, divide))
///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

function applyPercentDiscount(product, discount) {
product.displayPrice = product.basePrice * (1 - discount)
}
function applyFlatRateDiscount (product, discount) {
  product.displayPrice = product.basPrice - discount
}

// applyFlatRateDiscount (dogProduct[0], 4)
// console.log (dogProducts)

function applyDiscounts (arr, callback, discount){
for (let i=0; i<arr.length; i++){
  callback(arr[i], discount)
}
}

applyDiscounts(catProducts, applyFlatRateDiscount, 3)
applyDiscounts(dogProducts, applyPercentDiscount, .25)
console.log (dogProducts, catProducts)
////////////////////////
////// SANDWICHES //////
////////////////////////


function makeSandwich(bread){
  return function (ingredients) {
      let order = `You ordered a ${bread} bread sandwich with `

      for (let i = 0; i<ingredients.length; i++){
        order += `${ingredients[i]}`
      }
      return order
  }
}

let makeBLT = makeSandwich('toasted white')
console.log (makeBLT(['bacon', 'lettuce', 'tomato']))