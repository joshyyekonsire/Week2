////////// PROBLEM 1 //////////
console.log ('----------------------------')
console.log ('         Problem 1')

let numberOne = 2;
let numberTwo = 3;
let product;
function multiply (num1, num2, callback) {
   product = num1 * num2
   callback(product)
}
function testMultiply (answer) {
  console.log (`${numberOne} X ${numberTwo} = ${answer}`)
}

multiply (numberOne,numberTwo,testMultiply)
////////// PROBLEMS 2 - 6 //////////

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine',
 'Cahlan']

////////// PROBLEM 2 //////////
console.log ('----------------------------')
console.log ('         Problem 2')
function first (arr, callback) { 
  
  return callback (arr[0])
}

first(names, (firstName) => {
  console.log('The first name in names is ' + firstName)
})

////////// PROBLEM 3 //////////
console.log ('----------------------------')
console.log ('         Problem 3')
function last (arr, callback) { 
  
  return callback (arr[6])
}
last(names, lastName => {
  console.log('The last name in names is ' + lastName)
})
////////// PROBLEM 4 //////////
console.log ('----------------------------')
console.log ('         Problem 4')
console.log('Is Colt in the array?')
function contains (array, name, callback) {
  for (let i = 0; i < array.length; i++) {
    if (name === array[i]) {
      callback (true)
    } else {
      callback (false)
    }
  }
}

contains(names, 'Colt', result => {
  if(result === true){
    console.log('Colt is in the array')
  } else {
    console.log('Colt is not in the array')
  }
})
////////// PROBLEM 5 //////////
console.log ('----------------------------')
console.log ('         Problem 5')
function hasUniqueChars(arr){            
    let newArr = "";
    for (let i = 0; i < arr.length; i++){
        if (newArr.includes(arr[i])) {
          newArr += arr[i]
          return false
        } else {
          return true
        }
    }
}
let hello = hasUniqueChars('hello')

let monday = hasUniqueChars('monday')
let moonday = hasUniqueChars('moonday')
console.log ('Has unique characters?')
console.log (monday)                                                                         

console.log ('----------------------------')
console.log ('         Problem 6')

let timerName
console.time(timerName)

function uniq (arr, callback) {
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
if (arr[i] === arr[j]) {
  arr.splice(j, 1)
  j--
      }
    }
  } callback (arr)
}
uniq(names, (uniqArr) => {
console.log (`Array with all duplicates removed: ${uniqArr}`)
})
console.timeEnd(timerName)
////////// PROBLEM 6 //////////
console.log ('----------------------------')
console.log ('         Problem 7')
/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

// CODE HERE 


/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two parameters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

// CODE HERE





////////// CHALLENGES //////////


////////// CHALLENGE 1 //////////


/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// CODE HERE

/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

// CODE HERE

/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

// CODE HERE

/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

// CODE HERE




////////// CHALLENGE 2 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
  You'll learn about objects in our next lecture. But you can research objects and attempt this problem.
*/

// Do not edit the code below.
// var users = [
//   {
//     id: '12d',
//     email: 'tyler@gmail.com',
//     name: 'Tyler',
//     address: '167 East 500 North'
//   },
//   {
//     id: '15a',
//     email: 'cahlan@gmail.com',
//     name: 'Cahlan',
//     address: '135 East 320 North'
//   },
//   {
//     id: '16t',
//     email: 'ryan@gmail.com',
//     name: 'Ryan',
//     address: '192 East 32 North'
//   },
// ]
// Do not edit the code above.

// CODE HERE 



// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// getUserById(users, '16t', user => {
//   console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
// })