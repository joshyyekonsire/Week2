//////////////////////////// PROBLEM 1 ////////////////////////////

console.log('---------------------')
console.log('     Problem 1')

let me = {
  name: 'Daniel',
  age: 29,
};
console.log(me.name, me.age);
//////////////////////////// PROBLEM 2 ////////////////////////////

console.log('---------------------')
console.log('     Problem 2')
let dog = {
  name: 'Spike',
  color: 'Black and white',
  age: 78,
  goodBoy: true,
  goodGirl: false,
}
console.log(dog);
//////////////////////////// PROBLEM 3 ////////////////////////////
console.log('---------------------')
console.log('     Problem 3')

console.log (dog.name);
//////////////////////////// PROBLEM 4 ////////////////////////////
console.log('---------------------')
console.log('     Problem 4')

console.log(dog['name']);
//////////////////////////// PROBLEM 5 ////////////////////////////
console.log('---------------------')
console.log('     Problem 5')

let favoriteThings = {
  band: 'Warduna',
  food: 'Corn',
  person: 'my wife',
  book: 'Don Quixote',
  movie: 'Avatar the blue people',
  holiday: 'Halloween',
}
favoriteThings.car = 'Kia';
favoriteThings.show = 'Wednesday';
favoriteThings.food = 'Chicken Nuggets';
favoriteThings.book = 'Harry Potter';
console.log (favoriteThings);
//////////////////////////// PROBLEM 6 ////////////////////////////
console.log('---------------------')
console.log('     Problem 6')

var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
let {color, make, model, year} = carDetails
console.log(`the car is ${color}. The make is ${make}. 
The model is ${model}. Year: ${year}.`);
console.log (color);
//////////////////////////// PROBLEM 7 ////////////////////////////
console.log('---------------------')
console.log('     Problem 7')

function greeting(obj) {
  let {title, firstName, lastName} = obj;
  return 'Hello ' + title + ' ' + firstName + lastName + '!';
}
let object = {
title: 'Mr.',
firstName: 'Dan ',
lastName: 'Brown',
}
console.log (greeting(object));
//////////////////////////// PROBLEM 8 ////////////////////////////
console.log('---------------------')
console.log('     Problem 8')

function totalPopulation (Population2) {
let {utah, california, texas, arizona}  = Population2;
return utah + california + texas + arizona
}
let values = {
  utah: 17867800,
  california: 12786700,
  texas: 14560000,
  arizona: 2564000,
}
console.log (`Total population: ${totalPopulation(values)}`);
//////////////////////////// PROBLEM 9 ////////////////////////////
console.log('---------------------');
console.log('     Problem 9');

function ingredients (ingredientsObj) {
    let {carb, fat, protein}  = ingredientsObj
    let arrIngredients = [];
    arrIngredients.push(carb, fat, protein);
    return arrIngredients
    }
    let newIngredients = {
  carb: '124 mg',
  fat: '10 mg',
  protein: '122 mg'
    }
console.log(ingredients(newIngredients));
//////////////////////////// PROBLEM 10 ////////////////////////////
console.log('---------------------');
console.log('     Problem 10');

var user = {
  name: 'Bryan',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'BryanSmith33@gmail.com',
  birthday: '05/02/1990',
  username: 'bryansmith33'
};
user.name = 'Bryan G. Smith'
user.email = 'bryan.smith@devmounta.in'
console.log (user);
//////////////////////////// PROBLEM 11 ////////////////////////////
console.log('---------------------');
console.log('     Problem 11');

delete user.age
console.log (user);
//////////////////////////// PROBLEM 12 ////////////////////////////
console.log('---------------------');
console.log('     Problem 12');

class Cat {
  constructor (name, age, color) {
  this.name =  name,
  this.age = age,
  this.color = color
  }
}
let kittyCat = new Cat ('kitty', 13, 'black')
console.log (kittyCat);
//////////////////////////// PROBLEM 13 ////////////////////////////
console.log('---------------------');
console.log('     Problem 13');
class Wizard {
  constructor (name, age, favoriteSpell){
    this.name = name,
    this.age = age,
    this.favoriteSpell = favoriteSpell
  }
}
let wizard = new Wizard ('Mary', 23, 'wengardianleviosa');
function castSpell () {
  console.log (`${wizard.name} has cast the ${wizard.favoriteSpell} spell`)
  }
  castSpell(wizard);
//////////////////////////// PROBLEM 14 ////////////////////////////
console.log('---------------------');
console.log('     Problem 14');

class Phone {
  constructor (brand, model, storage, color, price, soldProperties){
    this.brand = brand,
    this.model = model,
    this.storage = storage,
    this.color = color,
    this.price = price,
    this.soldProperties = soldProperties
  }
}
let iphone = new Phone ('i7', 'xs', 100, 'grey', 15, false);
let android = new Phone ('Galaxy', 'plus', 80, 'black', 7, false);
let pixel = new Phone ('Google', 'pixel', 50, 'red', 30, false);
function sell () {;
  iphone.soldProperties = true
    console.log(`iphone ${iphone.brand}${iphone.model} has been sold`)
};
function changePrice (newPrice) {;
  iphone.price = newPrice;
  console.log (`The new price of the ${iphone.brand}${iphone.model} 
  is $${iphone.price}`);
};
sell(iphone);
changePrice (50);
console.log (iphone);
//////////////////////////// PROBLEM 15 ////////////////////////////
console.log('---------------------');
console.log('     Problem 15');

const colors = {
  background: 'red',
  highlight: 'blue',
  text: 'yellow'
}
const colorsCopy = {...colors};
console.log ("colorsCopy: ");
console.log (colorsCopy);
// ----------------------Helen-Parr----------------------------
const contactInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  phoneNumber: 1234445555,
  email: 'helen@mymail.com',
}
const shippingInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  street: '100 E. Main Street',
  city: 'Anytown',
  state: 'AZ',
  zipCode: 85004,
}
let helensInfo = {...contactInfo, ...shippingInfo};
console.log('********************************');
console.log("helensInfo: ");
console.log(helensInfo);
//////////////////////////// PROBLEM 16 ////////////////////////////
console.log('---------------------');
console.log('     Problem 16');

class Vehicle {
  constructor (capacity, color, mileage){
    this.capacity = capacity,
    this.color = color,
    this.mileage = mileage
     
  }
}

function move (vehicle, miles) {
  vehicle.mileage = vehicle.mileage + miles
}

let myFirstVehicle = new Vehicle (4, 'black', 100000)
console.log (myFirstVehicle);

class Motorcycle extends Vehicle {
  constructor (capacity, color, mileage, make, isCool) {
    super (capacity, color, mileage) 
      this.make = make,
      this.isCool = isCool
    }
  }
let harleyDavidson = new Motorcycle (2,'white', 30000, 2023, true)
console.log('********************************');
console.log ('Harley Davidson');
console.log (harleyDavidson);

move (harleyDavidson, 40000);

console.log (`new mileage: ${harleyDavidson.mileage}`);
console.log('********************************');
console.log ('Cypher-Punk');
    class Boat extends Vehicle {
      constructor (capacity, color, mileage, name, type, 
isSeaworthy) {
        super (capacity, color, mileage)
        this.name = name,
        this.type = type,
        this.isSeaworthy = isSeaworthy
     }}
     function checkSeaworthiness (boat) {
  if (boat.isSeaworthy === true) {
    console.log (`The ${boat.color} ${boat.type} ${boat.name} is seaworthy!`);
  } else {
    console.log(`You need to get your ${boat.type} ship in shape!`)
  }
}
function performMaintenance (boat) {
  boat.isSeaworthy = true
}
let myFirstBoat = new Boat (12, 'white and red', 100, 'cypher-punk', 'pirate', 
  false);
  console.log (myFirstBoat);
checkSeaworthiness(myFirstBoat);
performMaintenance(myFirstBoat);
console.log ('**maintenance performed');
checkSeaworthiness(myFirstBoat);
