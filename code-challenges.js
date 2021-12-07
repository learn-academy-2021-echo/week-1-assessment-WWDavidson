// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp = 42
// var temp = 350
// var temp = 212
if (temp > 212) {
  console.log(temp, "is above boiling point.");
} else if (temp === 212) {
  console.log(temp, "is at boiling point.")
} else {
  console.log(temp, "is below boiling point.")
}

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 42, 9, 13]

var newArray = myNumbers1.concat(myNumbers2)
console.log(newArray.length);


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

 var currentCohort = "Echo 2021"
 var newArray = currentCohort.split("")
//console.log(newArray); //this was a test log to console to make sure I initiated the .split() correctly

 var revArray = newArray.reverse();
 //console.log(revArray)
 if (3 < 4 || 10 < 5) {
   console.log(revArray.join(""))
 } else {
   console.log("Wrong Answer :(")
 }


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

 var myArray = [13, 34, 5, 10, 27, 42]

 for (let i = 0; i < myArray.length; i++) {
   if (myArray[i] % 2 === 0) {
   console.log("even")
   } else {
     console.log("odd")
   }
 }

// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

// var num1 = 58
// var num2 = 100

 var num1 = 27
 var num2 = 24

if (num1 > num2) {
  console.log(num1 - num2)
} else {
  console.log(num2 - num1);
}
