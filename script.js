var level = 0;
var startState = 0;
var order = [];

$(document).keydown(function(event){
    if (event.which === 13 && startState === 0){
        level = 1;
        $("h1").text("Level " + level);
        startState = 1;
        startGame();
    }
});

function startGame(){
    number = Math.floor(Math.random() * 4) + 1;
    setTimeout(() => 
    $(".b" + number).css("opacity", 0.5), 1000);
    order.push(number);
    console.log(order);
}