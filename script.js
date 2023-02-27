var level = 0;
var startState = false;
var order = [];
var b1Sound = new Audio("Sounds/b1.mp3");
var b2Sound = new Audio("Sounds/b2.mp3");
var b3Sound = new Audio("Sounds/b3.mp3");
var b4Sound = new Audio("Sounds/b4.mp3");
var wrongSound = new Audio("Sounds/wrong.mp3");

$(document).keydown(function(event){
    if (event.which === 13 && startState === false){
        level = 1;
        $("h1").text("Level " + level);
        startState = 1;
        startGame();
    }
});

function startGame(){
    number = Math.floor(Math.random() * 4) + 1;
    setTimeout(function(){
    $(".b" + number).css("opacity", 0.5)
    switch (number) {
        case 1:
            b1Sound.play();
            break;
        case 2:
            b2Sound.play();
            break;
        case 3:
            b3Sound.play();
        case 4:
            b4Sound.play();
        default:
            break;
    }
    }, 300);
    setTimeout(() => 
    $(".b" + number).css("opacity", 1), 600);
    order.push(number);
}