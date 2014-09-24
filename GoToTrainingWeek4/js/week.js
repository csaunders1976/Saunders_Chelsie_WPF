/*
Chelsie Saunders
September 24, 2014
WPF Section 01
Go To Training Week #4
 */

//Create a function that will take in a min and max number and return
// a random number in between

//Ask user for min number
var min = prompt("Let's get a random number between 2 numbers. \nPlease type in a minimum number. ");

//Validate the user prompt
while(min===""){
    //reprompt the user
    min= prompt("Please enter a number... or this won't work!")

}
//Test to make sure min is a number
console.log(min);