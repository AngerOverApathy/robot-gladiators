var playerName=window.prompt("What is your robot's name?");
var playerHealth=100;
var playerAttack=10;
//you can also log values like this
//console.log(playerName, playerAttack, playerHealth);
var enemyName="Roborto";
var enemyHealth=50;
var enemyAttack=12;
var fight=function () {
    //Alert players they're starting the round
    window.alert("Welcome to Robot Gladiators!");
};
fight();
//Subtract value of 'playerAttack' from 'enemyHealth'
enemyHealth=enemyHealth-playerAttack
//Log a result in the console to know it worked
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
)
//check enemy's health
if (enemyHealth <=0){
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
//Subtract value of 'enemyAttack' from 'playerHealth'
playerHealth=playerHealth-enemyAttack
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
)
//check to see if value of playerHealth variable is > 0
if (playerHealth < 0) {
    window.alert(playerName + "has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}