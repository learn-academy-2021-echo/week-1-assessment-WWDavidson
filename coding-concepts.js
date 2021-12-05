// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
 console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: The answer was 9. When cohort.length was logged to the console, it showed how many elements are in the variable "cohort".


// --------------------2) What will this log?

var greeting = "Hello World!"
 console.log(greeting[3])

// a) Your answer: It will log the second "l" in the string "Hello World!"
// b) Verify and explain: It logged the second "l" in the string. It did this because the index it called for was 3, and thats where the second "l" is located.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
 console.log(languages[index])

// a) Your answer: It will log "Ruby"
// b) Verify and explain: It logged "Ruby" because the index variable was declared as 1 and Ruby is at the 1 index in the array


// --------------------4) What will this log?

//var weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain: It actually caused an error and after reviewing my notes, it is because the two strings are in an array. If I take the []'s off and only use one string, it will work.
// var weekendDays = "Saturday"
//console.log(weekendDays.toUpperCase())

// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
 console.log(typeof dataTypes.length)

// a) Your answer: by looking at the code before running it, I noticed a space between typeof and datatypes which is going to cause an error. Even with that corrected, I think it will still cause an error because of the typeOf and and the .length at the end.

// b) Verify and explain:
// Well I was defintiely wrong, it returned: number. After doing some reading I realized that the syntax for the typeof method or function if correct. As far as why it returned number, I couldn't find a direct answer so I believe that its because when console.logging datatypes.length it would return a numerical value and then having the typeof method with it makes it return number. I would really like to know the correct reason. 
