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

