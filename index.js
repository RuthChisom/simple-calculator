// FIRST STYLE OF WRITING FUNCTIONS
// function calculate(num1, operator, num2){
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
//     switch(operator){
//         case '+' : return num1 + num2;  //addition
//         case '-' : return num1 - num2;  //subtraction
//         case '*' : return num1 * num2;  //multiplication
//         case '/' : return num1 / num2;  //division
//         case '%' : return num1 % num2;  //modulus
//         default : return "Error";
//     }
// }

// SECOND STYLE OF WRITING FUNCTIONS
const calculate = (num1, operator, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
        switch(operator){
            case '+' : return num1 + num2;  //addition
            case '-' : return num1 - num2;  //subtraction
            case '*' : return num1 * num2;  //multiplication
            case '/' : return num1 / num2;  //division
            case '%' : return num1 % num2;  //modulus
            default : return "Error";
        }

}

firstNumber = 50;
SecondNumber = 4;
console.log("The first number is",firstNumber);
console.log("The second number is",SecondNumber);
console.log("+ gives",calculate(firstNumber, '+', SecondNumber));
console.log("- gives",calculate(firstNumber, '-', SecondNumber));
console.log("* gives",calculate(firstNumber, '*', SecondNumber));
console.log("/ gives",calculate(firstNumber, '/', SecondNumber));
console.log("% gives",calculate(firstNumber, '%', SecondNumber));
console.log("& gives",calculate(firstNumber, '&', SecondNumber));
// console.log("50 + 4 = ",calculate('50', '+', 4));
// console.log("50 - 4 = ",calculate('50', '-', 4));
// console.log("50 * 4 = ",calculate('50', '*', 4));
// console.log("50 / 4 = ",calculate(50, '/', 4));
// console.log("50 % 4 = ",calculate(50, '%', 4));
// console.log("50 & 4 = ",calculate(50, '&', 4));