var d1 = document.querySelector(".d1"); // DICE 1
var d2 = document.querySelector(".d2"); // DICE 2
var player = document.querySelector(".winner");
var p1 = document.querySelector(".p1"); // PLAYER 1
var p2 = document.querySelector(".p2"); // PLAYER 2
var count1 = 0;
var count2 = 0;
function reroll() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var img1 = "images/dice" + randomNumber1 + ".png";
    var img2 = "images/dice" + randomNumber2 + ".png";

    d1.setAttribute("src", img1);
    d2.setAttribute("src", img2);

    if(randomNumber1 > randomNumber2) {
        player.innerHTML = "Player Wins: Player 1";
        count1++;
        p1.innerHTML = "WINS: " + count1;
    } else if(randomNumber1 < randomNumber2) {
        player.innerHTML = "Player Wins: Player 2";
        count2++;
        p2.innerHTML = "WINS: " + count2;
    } else {
        player.innerHTML = "DRAW";
    }
}

function reset() {
    var img1 = "images/dice6.png";
    var img2 = "images/dice6.png";
    d1.setAttribute("src", img1);
    d2.setAttribute("src", img2);
    player.innerHTML = "Player Wins: ";
    p1.innerHTML = "WINS: ";
    p2.innerHTML = "WINS: ";
    count1 = 0;
    count2 = 0;
}
