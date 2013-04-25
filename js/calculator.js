// first i want to create a function that takes three inputs, input1, function, input2
// these are all user inputs
// then i want to evaluate those inputs as three separate things that have a relationship defined by the inputted function

var input1 = prompt("Please enter the first number.");
var input2 = prompt("Please enter your second number.");
var oper = prompt("What would you like to do to them? +, add; -, subtract; *, multiply; /, divide; ");

operand1 = parseFloat(input1, 10);
operand2 = parseFloat(input2, 10);

function solveOperation(input1, input2, oper){
  var whole_package;
    if(oper === "+"){
      return operand1 + operand2;
    } else if (oper === "-") {
      return (operand1 - operand2);
    } else if (oper === "/") {
      return (operand1 / operand2);
    } else if (oper === "*")
      return (operand1 * operand2);
}
  
alert(solveOperation(operand1, operand2, oper));