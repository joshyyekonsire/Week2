
//Demo 12/19/22 with Kyle


let obiwanHealth = 100;
console.log (`Obiwan's Health: ${obiwanHealth}`);
console.log(typeof(obiwanHealth));
let stringObiwanHealth = String(obiwanHealth);
console.log (`String Obiwan's Health : ${stringObiwanHealth}`);
console.log(typeof(stringObiwanHealth));

let theWinner = 'Anakin won the fight'
console.log(theWinner);
let realWinner = theWinner.replace('Anakin', 'Obiwan');
console.log(realWinner);

if (realWinner.includes('Obiwan')) {
    console.log ('the winner has been revealed');
}

let arrayTheWinner = theWinner.split(' ');
console.log(arrayTheWinner);
let stringTheWinner = arrayTheWinner.join('-');
console.log(stringTheWinner);


function isAlive() {
if (obiwanHealth > 0) {
    console.log('a saga continues')
} else {
    console.log('rip ben')
}
}
isAlive();

function sneakAttack (attack) {
    obiwanHealth -= attack;
    console.log (`Health is now: ${obiwanHealth}`);
    isAlive();
}

sneakAttack (22);

sneakAttack (12);

sneakAttack (2);

const greeting = (person1, person2) => {;
    console.log(`${person1} says hello to ${person2}`);
}

greeting ('Obiwan', 'Uncle Ownen');




