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
while(min==="" || isNaN){
    //reprompt the user
    min= prompt("Please enter a number... or this won't work!")

}
//Test to make sure min is a number
console.log(min);

//console.log(isNaN(7));// false if it is a number
//console.log(isNaN("monkey"));//text gives us a true

while(isNaN(min)){
    min= prompt("Please enter a number... or this won't work!")
}

//Ask the user for a max number

var max = prompt("Please type in max number");

//Validate the user prompt
//best way (so far) to validate - combine the while loops

while (max === "" || isNaN(max)){
    //reprompt the use
    max = prompt("Please type in max number.");
}