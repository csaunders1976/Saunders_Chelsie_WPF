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
while(min==="" || isNaN(min)){
    //reprompt the user
    min= prompt("Please enter a number... or this won't work!")

}
//Test to make sure min is a number
console.log(min);

//console.log(isNaN(7));// false if it is a number
//console.log(isNaN("monkey"));//text gives us a true


//Ask the user for a max number

var max = prompt("Please type in max number");

//Validate the user prompt
//best way (so far) to validate - combine the while loops

while (max === "" || isNaN(max)){
    //re-prompt the use
    max = prompt("Please type in max number.");
}

//Math Class
//Math.random() - //nothing goes in the parenthesis
// a random number 0 -> 10 * 10
//What happens when I want a number between 10 -> 30
//Math.random() * (max-min ) + min


//console.log(Math.round(Math.random()*(max-min) + Number(min)));

//Math.round(number to round) - normal round - normal rounders
//Math.ceil (number to round) - round up
//Math.floor (number to round) - round down

//create a function to create a random number

//function call
//Set up a variable to CATCH the RETURNED value

var returnNum = randomizer(min, max);

function randomizer(minNum, maxNum){
    //Code inside of the function- it will only run if the function is called
    console.log("Inside of function");
    var randNumb =console.log(Math.round(Math.random()*(maxNum-minNum) + Number(minNum)));
    //return value
    return nandNum;


}
