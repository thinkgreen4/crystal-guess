$(document).ready(function(crystal) {
    //Create a target score that is random number between 10 and 110.


var targetScore = Math.floor(Math.random() *100)+10;
$("#target").text(targetScore);




// Here we created an on-click event that responds to button clicks of the crystal image and created a variable to count 
var counter = 0;
//var numberOptions = [20,15,7,11];
//for (var i = 0; i < numberOptions.length; i++)

//var numberOpt = [5,3,7,2]
var increment = Math.floor(Math.random()*10)+5;
var incrementTwo = Math.floor(Math.random()*4)+1;
var incrementThree = Math.floor(Math.random()* 10)+ 3;
var incrementFour = Math.floor(Math.random()*9) +2;


$("#pink").on("click", function() { 
    counter += increment;
    alert("Your score is now " + counter);
    if (counter === targetScore) {
        alert("You win!");
        $(":reset");
      }
  
      else if (counter >= targetScore) {
        alert("You lose!!");
        $(":reset");
      }
})
$("#green").on("click", function() { 
    counter += incrementTwo;
    alert("Your score is now " + counter);
    if (counter === targetScore) {
        alert("You win!");
        $(":reset").crsytal;
      }
  
      else if (counter >= targetScore) {
        alert("You lose!!");
        $(":reset").crystal;
      }
})
$("#red").on("click", function() { 
    counter += incrementThree;
    alert("Your score is now " + counter);
    if (counter === targetScore) {
        alert("You win!");
        $(":reset").crsytal;
      }
  
      else if (counter >= targetScore) {
        alert("You lose!!");
        $(":reset").crystal;
      }
})
$("#blue").on("click", function() { 
    counter += incrementFour;
    alert("Your score is now " + counter);
    if (counter === targetScore) {
        alert("You win!");
        $(":reset").crystal;
      }
  
      else if (counter >= targetScore) {
        alert("You lose!!");
        $(":reset").crystal;
      }
})
$("#orange").on("click", function() { 
    counter += 1;
    alert("Your score is now " + counter);
    if (counter === targetScore) {
        alert("You win!");
        $(":reset").crystal;
      }
  
      else if (counter >= targetScore) {
        alert("You lose!!");
        $(":reset").crystal;
      }
})
  $("#clear").on("click", function() {
    $(":reset").crystal;
  })
// create a function to reset all the numbers 
});