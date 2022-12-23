
//=====================ROUND 1 ============================

console.log("Get Ready! -- You are on defense.")
console.log ('======================================');
console.log ('Round 1 .... FIGHT!');
console.log ('======================================');
//Offensive Probability Round 1
let attackChance = Math.round(Math.random());
if (attackChance === 0) {
    console.log("Attack: 0 - Attack down!")
} else if (attackChance === 1) {
    
    console.log("Attack: 1 - Attack up!")
}
//Defensive Probability Round 1
let defenseChance = Math.round(Math.random());
if (defenseChance === 0) {
    console.log("Defense: 0 - Defense down!")
} else if (defenseChance === 1) {
    console.log("Defense: 1 - Defense up!")
}
//Health Round 1
let healthArray = [5,4,3,2,1,0];
let Health = healthArray[0];
console.log(`Old health: ${Health}`);
if (attackChance === 1 && defenseChance === 0){;
       Health --;
        console.log("Direct hit!");
        console.log("Health -1")
    } else if (attackChance === 1 && defenseChance === 1){;
        console.log("Defended!");
    } else if (attackChance === 0 && defenseChance === 1){;
        Health ++;
        console.log("Health restored!");
        console.log("Health +1");
    } else {console.log("Nothing Happened!")};
console.log(`New health: ${Health}`);
//-------------------------------ROUND 2-------------------------------------------------------
console.log ('======================================');
console.log ('Round 2 .... FIGHT!');
console.log ('======================================');
//Attack Probability 2
let attackChance2 = Math.round(Math.random());
if (attackChance2 === 0) {
    console.log("Attack: 0 - Attack down!")
} else if (attackChance2 === 1) {
    console.log("Attack: 1 - Attack up!")
}
//Defensive Probability round 2
let defenseChance2 = Math.round(Math.random());
if (defenseChance2 === 0) {
    console.log("Defense: 0 - Defense down!")
} else if (defenseChance2 === 1) {
    console.log("Defense: 1 - Defense up!")
}
//HEALTH round 2
console.log(`Old health: ${Health}`);
if (attackChance2 === 1 && defenseChance2 === 0){;
       Health --;
        console.log("Direct hit!");
        console.log("Health -1")
    } else if (attackChance2 === 1 && defenseChance2 === 1){;
        console.log("Defended!");
    } else if (attackChance2 === 0 && defenseChance2 === 1){;
        Health ++;
        console.log("Health restored!");
        console.log("Health +1")
    } else {console.log("Nothing Happened!")};
console.log(`New health: ${Health}`);
//-------------------------------ROUND 3-------------------------------------------------------
console.log ('======================================');
console.log ('Round 3 .... FIGHT!');
console.log ('======================================');
//Attack Probability 3
let attackChance3 = Math.round(Math.random());
if (attackChance3 === 0) {
    console.log("Attack: 0 - Attack down!")
} else if (attackChance3 === 1) {
    console.log("Attack: 1 - Attack up!")}
//Defensive Probability round 3
let defenseChance3 = Math.round(Math.random());
if (defenseChance3 === 0) {
    console.log("Defense: 0 - Defense down!")
} else if (defenseChance3 === 1) {
    console.log("Defense: 1 - Defense up!")
}//HEALTH round 3
console.log(`Old health: ${Health}`);
if (attackChance3 === 1 && defenseChance3 === 0){;
       Health --;
        console.log("Direct hit!");
        console.log("Health -1")
    } else if (attackChance3 === 1 && defenseChance3 === 1){;
        console.log("Defended!");
    } else if (attackChance3 === 0 && defenseChance3 === 1){;
        Health ++;
        console.log("Health restored!");
        console.log("Health +1")
    } else {console.log("Nothing Happened!")};
console.log(`New health: ${Health}`);
//===================================Round 4 =========================
console.log ('======================================');
console.log ('Round 4 .... FIGHT!');
console.log ('======================================');
//Attack Probability 4
let attackChance4 = Math.round(Math.random());
if (attackChance4 === 0) {
    console.log("Attack: 0 - Attack down!")
} else if (attackChance4 === 1) {
    console.log("Attack: 1 - Attack up!")
}
//Defensive Probability round 4
let defenseChance4 = Math.round(Math.random());
if (defenseChance4 === 0) {
    console.log("Defense: 0 - Defense down!")
} else if (defenseChance4 === 1) {
    console.log("Defense: 1 - Defense up!")
}
//HEALTH round 4
console.log(`Old health: ${Health}`);
if (attackChance4 === 1 && defenseChance4 === 0){;
       Health --;
        console.log("Direct hit!");
        console.log("Health -1")
    } else if (attackChance4 === 1 && defenseChance4 === 1){;
        console.log("Defended!");
    } else if (attackChance4 === 0 && defenseChance4 === 1){;
        Health ++;
        console.log("Health restored!");
        console.log("Health +1")
    } else {console.log("Nothing Happened!")};
console.log(`New health: ${Health}`);
//======================================= FINAL / round 5 ================================================
console.log ('======================================');
console.log ('FINAL ROUND');
console.log ('======================================');
console.log("UH OH!!! YOU HAVE BEEN POISONED!")
//Poison
let PoisonChance = Math.round(Math.random());
if (PoisonChance === 0) {
    console.log("Poison: 0 - poison is safe")
} else if (PoisonChance === 1) {
    console.log("Poison: 1 - poison is not safe")
}
//Attack Probability 5
let attackChance5 = Math.round(Math.random());
if (attackChance5 === 0) {
    console.log("Attack: 0 - Attack down!")
} else if (attackChance5 === 1) {
    console.log("Attack: 1 - Attack up!")
}
//Defensive Probability round5
let defenseChance5 = Math.round(Math.random());
if (defenseChance5 === 0) {
    console.log("Defense: 0 - Defense down!")
} else if (defenseChance5 === 1) {
    console.log("Defense: 1 - Defense up!")
}
//HEALTH round 5
console.log(`Old health: ${Health}`);
if (attackChance5 === 1 && defenseChance5 === 0){;
       Health -= 4;
        console.log("Direct hit!");
        console.log("Health -4")
    } else if (attackChance5 === 1 && defenseChance5 === 1){;
        console.log("Defended!");
    } else if (attackChance5 === 0 && defenseChance5 === 1){;
        Health += 4;
        console.log("Health restored!");
        console.log("Health +4")
    } else {console.log("Nothing Happened!")};
console.log(`New health: ${Health}`);
if (Health > 3) {
    console.log ("you are not affected by poison")
} else {
    Health -= 30;
    console.log("YOU HAVE BEEN HURT BY POISON!")
    console.log("Health -30")
}
if (Health <= 0) {
    console.log ("YOU ARE DEAD!")
}
console.log(`Final health: ${Health}`);