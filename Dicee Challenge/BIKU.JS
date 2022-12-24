var player1 = Math.floor(Math.random()*6)+1;
var player2 = Math.floor(Math.random()*6)+1;

// console.log(player1)
// console.log(player2)
var dice1 = "/images/dice"+player1+".png"
var dice2 = "/images/dice"+player2+".png"
// var dice = "/images/dice1.png"
// console.log(dice)

document.querySelector(".img1").src = dice1
document.querySelector(".img2").src = dice2

var text

if (player1>player2) {
    text = "Player 1 Win! 🚩"
} else if(player1<player2){
    text = "Player 2 Win! 🚩"
} else{
    text = "Draw!"
}


document.querySelector("h1").innerHTML = text