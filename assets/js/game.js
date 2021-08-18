var playerMoney = 10;
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can log multiple values at once like 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Hades"
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
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

fight();

