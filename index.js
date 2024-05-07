var d1 = document.querySelector(".d1");
var d2 = document.querySelector(".d2");
var player = document.querySelector(".winner");

function reroll() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var img1 = "images/dice" + randomNumber1 + ".png";
    var img2 = "images/dice" + randomNumber2 + ".png";

    d1.setAttribute("src", img1);
    d2.setAttribute("src", img2);

    if(randomNumber1 > randomNumber2) {
        player.innerHTML = "Player Wins: Player 1";
    } else if(randomNumber1 < randomNumber2) {
        player.innerHTML = "Player Wins: Player 2";
    } else {
        player.innerHTML = "DRAW";
    }
    console.log(randomNumber1);
}

function reset() {
    var img1 = "images/dice6.png";
    var img2 = "images/dice6.png";
    d1.setAttribute("src", img1);
    d2.setAttribute("src", img2);
    player.innerHTML = "Player Wins: ";
}
