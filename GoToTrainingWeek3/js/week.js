/*
Chelsie Saunders
September 18, 2014
WPF Section 01
Go To Training Week #3
 */

//alert("Testing...can you hear me?");

// Code a check to see how many pears are in a fruit bowl.
//Array - hold multiple variables under one name - variables of variables

var bowlOfFruit = ["apple", "banana", "pear", "peach", "pear"];

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
}
console.log(totalNumPears+ " pears in our bowl");