let n = 5;
let luckynumbers = [];
for (let i = 0; i < n; i++) {        
let x = [(Math.round(Math.random()*100))]
if (x % 2 === 0) {
    x/3
} else if (x % 7 === 0) {
  x - 14  
} else {
    x/2
}
    luckynumbers.push(x);
}


console.log ('------------------------------------------');
console.log (luckynumbers + '');
console.log ('------------------------------------------');
