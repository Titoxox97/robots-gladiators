var playerName = window.prompt("What is your robot's name?");
var playerMoney = 10;
var playerHealth = 100;
var playerAttack = 10;
 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Hades", "Zeus", "Poseidon"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

// Fight function (parameter now with parameter for enemy's name)

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        // place fight function code block here
    
    var promptFight = window.prompt("Would you like to FIGHT or Skip the fight? Enter 'Fight' or 'SKIP' to choose.");

    // if player skips confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes leave fight
        if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight.');

            // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;

        }
    }

    // subtract the playerAttack from the the value of enemyHealth
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console to confirm it worked
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "

)
    
    
// Check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");

    // award player money for winning
    playerMoney = playerMoney + 20;
    // leave while() loop since enemy is dead
    break;
}

else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}

// subtract the value of enemyAttack from the value of playerHealth
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console to confirm that it worked
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. ")

    // check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died! ");
    break;

}
else {
    window.alert(playerName + " still has " + playerHealth + " health left. ");
}
} };

// fight each enemy-robot by looping over them and fighting them one at a time
for(var i = 0; i < enemyNames.length; i++) {
    // if player is still alive keep fighting
    if (playerHealth > 0) {
        // let player know what round they are in
        window.alert("Welcome to Robot Galdiators! Round " + (i + 1));

        // picke new enemy to fight based on the index of the enemy names array
        var pickedEnemyName = enemyNames[i];

        // reset enemey healthy before starting new fight
        enemyHealth = 50;

        // use debugger to pursue scrip from running and check whats going on
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function
        fight(pickedEnemyName)
    }
    // if player isn't alive stop the game
    else {
        window.alert("You have lost your robot in battle! Game Over!")
        break;
    }
    
}

