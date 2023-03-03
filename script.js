var level = 0;
var started = false;
var gameOrder = [];
var userOrder = [];
var b1Sound = new Audio("Sounds/b1.mp3");
var b2Sound = new Audio("Sounds/b2.mp3");
var b3Sound = new Audio("Sounds/b3.mp3");
var b4Sound = new Audio("Sounds/b4.mp3");
var wrongSound = new Audio("Sounds/wrong.mp3");

$(document).keydown(function(event){
    if (event.which === 13 && started === false){
        $("h1").text("Level " + level);
        started = true;
        startGame();
        // startGame();
    }
});

function startGame(){
    if (started) {
        number = Math.floor(Math.random() * 4) + 1;
        $(".b" + number).addClass("button-flash");
        setTimeout(() => $(".b" + number).removeClass("button-flash"), 200);
        gameOrder.push(number);
        }
}


// function startGame(){  
//     if (started){  
//         number = Math.floor(Math.random() * 4) + 1;
//         thisClass = ".b" + number;
//         setTimeout(function(){
//         $(thisClass).css("opacity", 0.5);
//         switch (number) {
//             case 1:
//                 b1Sound.play();
//                 break;
//             case 2:
//                 b2Sound.play();
//                 break;
//             case 3:
//                 b3Sound.play();
//             case 4:
//                 b4Sound.play();
//             default:
//                 break;
//         }
//         gameOrder.push(number);
//         }, 300);
//         setTimeout(() => $(thisClass).css("opacity", 1), 600);
//         $(".button").click(function(){
//             if ($(this).hasClass("b" + number)){
//                 level += 1;
//                 $("h1").text("Level " + level);
//                 startGame();
//             }
//             else {
//                 $("body").css("background-color", "red");
//                 wrongSound.play();
//                 setTimeout(() => $("body").css("background-color", "#1b1d1c"), 120);
//                 $("h1").css("color", "red").text("Game Over! Press the \"Enter\" key to restart.")
//                 level = 0;
//                 gameOrder = [];
//                 playerOrder = [];
//                 started = false;
//             }
            
//         });
//     }  
//}