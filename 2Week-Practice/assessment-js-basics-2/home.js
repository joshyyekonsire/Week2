///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////

//////////////////PROBLEM 1////////////////////
console.log (' ------------------------------ ')
console.log ('       Problem 1')

let greetUser = (username) => console.log (`Welcome back, ` + username)

greetUser ('Daniel')

//////////////////PROBLEM 2////////////////////
console.log (' ------------------------------ ')
console.log ('       Problem 2')

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

// function canWeDeliver (zipCode) {
// for (let i = 0; i < deliveryAreaZipCodes.length; i++){
//     if (deliveryAreaZipCodes[i] === zipCode){
//         console.log ("You're in the delivery zone!")
//     } else {
//         console.log ("Sorry, we can't deliver to that address.")
//     }
// }
// }
// canWeDeliver ()
// // 
// console.log (deliveryAreaZipCodes.includes(85207)) 

if (deliveryAreaZipCodes.includes(85204) === true) {
    console.log ("You're in the delivery zone")
} else {
    console.log ("Sorry, we can't deliver to that address.")
}

//////////////////PROBLEM 3////////////////////
console.log (' ------------------------------ ')
console.log ('       Problem 3')

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

console.log('New deal: ' + deals[0].title.replace('15%', '10%'))

console.log ('Good through: ' + deals[1].desc.replace('March', 'April').trim())

