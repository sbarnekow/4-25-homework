var color = [
  "black", "green", "yellow", "blue", "orange"
];

function favorites(){
  for (var i = 1; i < color.length; i += 1) {
    console.log ("My #" + i +
    " favorite color is " + color[i] + "."); 
  }
}

var q5 = favorites();