
console.log ("--------------------------------------")
console.log("             Problem 1")


function helloWorld () {;
  return ('Hello, World!');
};
console.log (helloWorld());

console.log ("--------------------------------------")
console.log("             Problem 2")


jsNinja = () => 'I am a JavaScript ninja';
console.log(jsNinja());

console.log ("--------------------------------------")
console.log("             Problem 3")

function printName (name) {
  console.log (name);
}
printName ('hello')
console.log ("--------------------------------------")
console.log("             Problem 4")


const greeting = (names) =>  `Hello, ${names}`

console.log(greeting('Jake'));

console.log ("--------------------------------------")
console.log("             Problem 5")

const compareNums = (x,y) => {;
  if (x > y) {;
    return x;
  } else if (y > x) {;
    return y;
  } else {;
    return `${x} = ${y}`;
  };
};
console.log (`Larger numer = ${compareNums (15 , 22)}`);
console.log ("--------------------------------------")
console.log("             Problem 6")

function add (num1, num2){
  return (parseInt(num1 + num2));
}
console.log (add(2, 3));
console.log ("--------------------------------------")
console.log("             Problem 7")

const exclaim = function(str) {
  return str.toUpperCase() + '!!!'
}

console.log (exclaim('expression'));
console.log ("--------------------------------------")
console.log("             Problem 8")

const exclaimTwo = (str) => {
  return str.toUpperCase() + '!!!'
}

console.log(exclaimTwo('arrow'));

let exclaimThree = () => exclaimTwo;
console.log(exclaimThree('arrow'));
console.log ("--------------------------------------")
console.log("             Problem 9")

function exclaimFour(str) {
  return str.toUpperCase() + '!!!'
}

console.log(exclaimFour('declaration'));
console.log ("--------------------------------------")
console.log("             Problem 10")

const nameCheck = (name) => {
if (name === 'Steven') {
  return "What's up Steven?" } else if (name === 'Bryan') {
    return "What's up Bryan"} else {
      return `Cool name, ${name}` } }

      console.log(nameCheck('B'));
  
      console.log ("--------------------------------------")
console.log("             Problem 11")
     
const faveColorFinder = (color) => {
  if (color === 'red') {
    return "red is a great color" } else if (color === 'green') {
      return "green is a solid favorite color"} else {
        return `you need to evaluate your favorite color choice` } }
  
        
        let colorRating = faveColorFinder ('black');
        console.log(colorRating);
        console.log ("--------------------------------------")
        console.log("             Problem 12")
        
let namesArr = ['Cameron', 'Riley', 'Eric', 'Brenna', 'Karl']

function printAllNames(namesArr) {;
  for (let i = 0; i < namesArr.length; i++) {;
    console.log(namesArr[i]);
  };
};

printAllNames(namesArr);
console.log ("--------------------------------------")
console.log("             Problem 13")

function thatsOdd (x) {;
  if (x % 2 === 0){;
    return "That's not odd!";
  } else if (x % 2 !== 0) {;
    return "That is odd indeed!";
  };
}

let oddChecker = (thatsOdd(0));
console.log(oddChecker);

console.log ("--------------------------------------")
console.log("             Problem 14")


const bestMovie = (movie) => `${movie}!`
console.log (`Best movie ever: ${bestMovie('Sharknado')}`);

console.log ("--------------------------------------")
console.log("             Problem 15")

let bigOrSmallArray = [1,101, 102, 2, 103, 4, 5, 6, 107];
function bigOrSmall(arr) {;
  let answers = [];
  for (let i = 0; i < arr.length; i++) {;
    if (arr[i] > 100) {;
      answers.push("big");
    } else {;
      answers.push("small");
    };
  };
  return answers;
}
console.log(bigOrSmall(bigOrSmallArray));
console.log ("--------------------------------------")
console.log("             Problem 16")

let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 
'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Glimmer'
function theEliminator(contestants, loser) {
  for (let i = 0; i < contestants.length; i++) {
    if (contestants[i] === loser) {
      contestants.splice(i, 1)
    }
  }
  return contestants
}
let updatedContestants = theEliminator(contestants, 'Peeta')
console.log(`New contestants: ${updatedContestants}`);
console.log ("--------------------------------------")
console.log("             Problem 17")

let sampleString = "Hi, my name is Kylo."

function upperString (sampleString) {
console.log(sampleString.toUpperCase())
};

console.log(`New Message: ${upperString(sampleString)}`);

console.log ("--------------------------------------")
console.log("             Problem 18")

  function emailCheck(email) {
    email = String(email).trim()
    if (email.includes('@')) {
      return 'email verified'
    } else {
      return 'must provide a valid email address'
    }
  }
console.log(emailCheck('@joshy'));
console.log(emailCheck('joshy'))

console.log ("--------------------------------------")
console.log("             Problem 19")

function cocoRibbit (totalFrogs) { 
  return totalFrogs / 3
}
console.log(`You purchased: ${Math.round(cocoRibbit(500))} frogs`);

console.log ("--------------------------------------")
console.log("             Problem 20")
let totalFrogs2 = (`You purchased: ${Math.round(cocoRibbit(200))} frogs`);
console.log (totalFrogs2);

console.log ("--------------------------------------")
console.log("             Problem 22")


let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

let globalScope = []
let bathroomScope = []
let bathtubScope = []
let pondScope = []

globalScope.push('duck');
console.log (`globalScope: ${globalScope}`);

bathroomScope.push('duck', 'rubberDuck');
console.log (`bathroomScope: ${bathroomScope}`);

bathtubScope.push('duck', 'rubberDuck', 'sailorDuck');
console.log (`bathtubScope: ${bathtubScope}`);

pondScope.push('duck', 'rubberDuck', 'sailorDuck', 'realDuck');
console.log (`pondScope: ${pondScope}`);