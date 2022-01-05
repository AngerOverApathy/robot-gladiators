var playerName=window.prompt("What is your robot's name?");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;
//you can also log values like this
//console.log(playerName, playerAttack, playerHealth);
var enemyNames=["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth=50;
var enemyAttack=12;

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }

var fight=function(enemyName) {
//Alert players they're starting the round
    window.alert("Welcome to Robot Gladiators!");

var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

//if player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
//Log a result in the console to know it worked
console.log(
    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
);

//check enemy's health
if (enemyHealth <= 0){
    window.alert(enemyNames + " has died!");
} else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
}

//Subtract value of 'enemyAttack' from 'playerHealth'
playerHealth=playerHealth-enemyAttack;
console.log(
    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

//check to see if value of playerHealth variable is > 0
if (playerHealth <= 0) {
    window.alert(playerName + "has died!");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
//if player chooses skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
//confirm skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

//if yes (true), leave
if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
//subtract money for skipping
playerMoney = playerMoney - 2;
}
//if no (false), ask question by running fight()
else {
    fight();
}
//if player did not choose either option
} else {
    window.alert("You need to choose a valid option. Try again!");
}

};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }