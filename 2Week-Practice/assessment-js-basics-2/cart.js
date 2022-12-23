///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////

//////////////////PROBLEM 1////////////////////
console.log (' ------------------------------ ')
console.log ('       Problem 1')

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

let summedPrice = cart.reduce((acc,cur) => acc + cur.price, 0)
console.log ('Total cart price: ')
console.log (summedPrice)
//////////////////PROBLEM 2////////////////////
console.log (' ------------------------------ ')
console.log ('       Problem 2')

function calcFinalPrice(cartTotal, couponValue, tax) {
    return (cartTotal - couponValue) * (1-tax)
}

console.log ('After tax/coupon: '+ calcFinalPrice(summedPrice, 2.00, 0.06))

//////////////////PROBLEM 3////////////////////
console.log (' ------------------------------ ')
console.log ('       Problem 3')

class Customer {
        constructor (name, price, type, toppings){
        this.name = name;
        this.price = price;
        this.type = type;
        this.toppings = toppings
        }
    }
let pizza = new Customer ("pizza", 12, 'Peperoni', 'peperoni, cheese')
console.log ('NEW OBJECT:')
console.log (pizza)


