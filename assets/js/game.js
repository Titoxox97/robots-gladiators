var playerMoney = 10;
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// Game States
// "WIN" - Player robot has defeated all enemy-robots

//     *Fight all enemy-robots
//     *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// You can log multiple values at once like 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Hades", "Zeus", "Poseidon"];
console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {
console.log(enemyNames[i]);
console.log(i);
console.log(enemyNames[i] + " is at " + i + " index");
}


var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // fught function statements
    window.alert("Wlecome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or Skip the fight? Enter 'Fight' or 'SKIP' to choose.");

    // If player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

    
// subtract the playerAttack from the the value of enemyHealth
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console to confirm it worked
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "

)

// Check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}
// if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // If yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // Subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }
    window.alert(playerName + " has chosen to skip the fight!");

} else {
    window.alert("You need to choose a valid option. Try again!");
}
// subtract the value of enemyAttack from the value of playerHealth
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console to confirm that it worked
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. ")

};

// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died! ");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left. ");
}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

