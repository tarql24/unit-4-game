var wins = 0;
var losses = 0;
var userTotal = 0;

var mainNum = Math.floor(Math.random() * 50) + 19;
$("#main-number").html("<h1>" + mainNum + "</h1>");
console.log(mainNum);

var num1 = Math.floor(Math.random() * 11) + 1;
var num2 = Math.floor(Math.random() * 11) + 1;
var num3 = Math.floor(Math.random() * 11) + 1;
var num4 = Math.floor(Math.random() * 11) + 1;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

function reset() {
  mainNum = Math.floor(Math.random() * 29) + 19;
  $("#main-number").html("<h1>" + mainNum + "</h1>");
  var num1 = Math.floor(Math.random() * 11) + 1;
  var num2 = Math.floor(Math.random() * 11) + 1;
  var num3 = Math.floor(Math.random() * 11) + 1;
  var num4 = Math.floor(Math.random() * 11) + 1;
  userTotal = 0;
  $("#user-number").html("<h2>" + userTotal + "</h2>");
}

function win() {
  wins++;
  $("#wins").html("<p>Wins: " + wins + "</p>");
  reset();
}
//addes the losses to the userTotal
function loss() {
  losses++;
  $("#losses").html("<p>Losses: " + losses + "</p>");
  reset();
}

$("#num1").on("click", function() {
  userTotal += num1;
  $("#user-number").html("<h2>" + userTotal + "</h2>");

  if (userTotal == mainNum) {
    win();
  } else if (userTotal > mainNum) {
    loss();
  }
});

$("#num2").on("click", function() {
  userTotal += num2;
  $("#user-number").html("<h2>" + userTotal + "</h2>");

  if (userTotal == mainNum) {
    win();
  } else if (userTotal > mainNum) {
    loss();
  }
});

$("#num3").on("click", function() {
  userTotal += num3;
  $("#user-number").html("<h2>" + userTotal + "</h2>");

  if (userTotal == mainNum) {
    win();
  } else if (userTotal > mainNum) {
    loss();
  }
});

$("#num4").on("click", function() {
  userTotal += num4;
  $("#user-number").html("<h2>" + userTotal + "</h2>");

  if (userTotal == mainNum) {
    win();
  } else if (userTotal > mainNum) {
    loss();
  }
});
