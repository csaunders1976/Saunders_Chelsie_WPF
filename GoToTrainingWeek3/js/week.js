/*
Chelsie Saunders
September 18, 2014
WPF Section 01
Go To Training Week #3
 */

//alert("Testing...can you hear me?");

// Code a check to see how many pears are in a fruit bowl.
//Array - hold multiple variables under one name - variables of variables

var bowlOfFruit = ["apple", "banana", "pear", "peach", "pear", "apple","pear", "banana","pear", "tomato","orange"];

console.log(bowlOfFruit);

//How long is this array?
//Array Length
//Dot Syntax - "use a period"


console.log(bowlOfFruit.length);

//Now can I get the text of "banana"?
console.log(bowlOfFruit[1]);

//Test each fruit to see if it is a pair
//If it is, lets add it to a total# of pears
// create a variable to hole the # of pears
var totalNumPears = 0;

//if statement - conditional

/*****OLD SCHOOL*******
if(bowlOfFruit[0] === 'pear'){
  //this code will run if the condition is true
  //Then add 1 to our total number of pears
    totalNumPears++;
}

//Test all of the fruits in the bowl
if(bowlOfFruit[1] === 'pear'){
    //this code will run if the condition is true
    //Then add 1 to our total number of pears
    totalNumPears++;
}

if(bowlOfFruit[2] === 'pear'){
    //this code will run if the condition is true
    //Then add 1 to our total number of pears
    totalNumPears++;
}

if(bowlOfFruit[3] === 'pear'){
    //this code will run if the condition is true
    //Then add 1 to our total number of pears
    totalNumPears++;
}

if(bowlOfFruit[4] === 'pear'){
    //this code will run if the condition is true
    //Then add 1 to our total number of pears
    totalNumPears++;
}*/

//create a loop for repetitive code
//for loop - runs a specific number of times

//for(intializing variable; condition to test; what to do after the condition)

for(var i=0; i<bowlOfFruit.length; i++){
    //As long as condition is true, then code will run
    console.log("Inside of For Loop");
    console.log(i);
    console.log(bowlOfFruit[i]);
    //Test each item to see if it is a pear
    if(bowlOfFruit[i] === "pear"){
        // add to total number of pears
        totalNumPears++;

    }

}
console.log(totalNumPears+ " pears in our bowl");

var userInput;
userInput = prompt("Please type in your name:");

//Test if the user left it blank

while(userInput ===""){
    //prompt the user to type in information again
    userInput = prompt("Please type in your name: \n Please don't leave it blank.");
}

//Test if the variable is NOT a number!!

//IsNaN(variable to test) - returns boolean
console.log(isNaN(7));  //returns false
console.log(isNaN("test")); //returns true

var numberInput;
numberInput = prompt("Enter a number");
/*
//validate that the user typed in a number
while(isNaN(numberInput)){
    //If user type in test this code will run
    numberInput = prompt("Please enter only a number");
}

while(numberInput === ""){
    numberInput = prompt("Please don't leave blank")
}*/

while(numberInput==="" || isNaN(numberInput)){
    numberInput = prompt("Something went wrong, retype in only a number:")
}