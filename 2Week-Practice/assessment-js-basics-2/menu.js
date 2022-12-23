///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////

//////////////////PROBLEM 1////////////////////
console.log (' ------------------------------ ')
console.log ('       Problem 1')

const pizza = {
    
    name: 'pizza',
    price: 14,
    category: 'entree',
    popularity: 60,
    rating: 5,
    tags: ['gluten-free', 'kids', 'diet']
}

console.log (pizza)
//////////////////PROBLEM 2////////////////////
console.log (' ------------------------------ ')
console.log ('       Problem 2')
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log ('popularity: ')
console.log (pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log ('tag: ')
console.log (pizza.tags[1])


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/
console.log ('Without price: ')
delete pizza.price

console.log (pizza)


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/
console.log ('Without category: ')
delete pizza.category
console.log (pizza)


//////////////////PROBLEM 3////////////////////
console.log (' ------------------------------ ')
console.log ('       Problem 3')
const cake = {
    
    name: 'cake',
    price: 7,
    category: 'dessert',
    popularity:110,
    rating: 6,
    tags: ['gluten-free', 'kids', 'diet']
}
const donuts = {
    
    name: 'donut',
    price: 2,
    category: 'dessert',
    popularity: 100,
    rating: 5,
    tags: ['gluten-free', 'kids', 'diet']
}
const drink = {
    
    name: 'drink',
    price: 5,
    category: 'drink',
    popularity: 70,
    rating: 4,
    tags: ['gluten-free', 'kids', 'diet']
}
const breadSticks = {
    
    name: 'breadSticks',
    price: 5,
    category: 'Appitizer',
    popularity: 40,
    rating: 3,
    tags: ['gluten-free', 'kids', 'diet']
}

let foodArr = [pizza,cake,donuts,drink,breadSticks]





//////////////////PROBLEM 4////////////////////
console.log (' ------------------------------ ')
console.log ('       Problem 4')

let filteredFood = foodArr.filter(function(tag){
    return tag === foodArr.tags
})


//////////////////PROBLEM 5////////////////////
console.log (' ------------------------------ ')
console.log ('       Problem 5')
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

// function filterByProperty (property, number, type) {
// foodArr.filter(function())
// }


/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE