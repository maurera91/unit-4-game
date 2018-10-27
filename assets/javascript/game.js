var target = 19 + Math.floor(Math.random() * 101);
var wins = 0;
var losses = 0;
var score = 0;
var gem_1_value = 0;
var gem_2_value = 0;
var gem_3_value = 0;
var gem_4_value = 0;


var reset = function(){
    target = 19 + Math.floor(Math.random() * 101);
    score = 0;
    $("#score").text(score);
    $("#target").text("Target: " + target);
    gem_1_value = (Math.floor(Math.random() * 12)+1);
    gem_2_value = (Math.floor(Math.random() * 12)+1);
    gem_3_value = (Math.floor(Math.random() * 12)+1);
    gem_4_value = (Math.floor(Math.random() * 12)+1);
    
}

var winCondition = function(){
    if (score == target){
        alert("You win!");
        wins++;
        $("#wins").text("Wins: " + wins);
        reset();
    }
    if (score > target){
        alert("You went over the target!");
        losses++;
        $("#losses").text("Losses: " + losses);
        reset();
    }
}

reset();

$("#gem_1").on("click", function(){
    score += gem_1_value;
    $("#score").text(score);
    winCondition();    
});

$("#gem_2").on("click", function(){
    score += gem_2_value;
    $("#score").text(score);
    winCondition();
});

$("#gem_3").on("click", function(){
    score += gem_3_value;
    $("#score").text(score);
    winCondition();
});

$("#gem_4").on("click", function(){
    score += gem_4_value;
    $("#score").text(score);
    winCondition();
});