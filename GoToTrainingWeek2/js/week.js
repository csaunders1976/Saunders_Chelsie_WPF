/*
Chelsie Saunders
September 10, 2014
WPF Section 01
Go To Training Week #2
 */
alert("Testing 1, 2, 3!")

//Create a calculator for age

//Ask the user their name
var name = prompt("Please type in your name:");

//test to make sure this works
console.log(name);

//Alert to the user and explain what we are doing
alert("Welcome "+name+" Lets figure out how are old you are.");

//Ask year the user was born
//Create a variable to catch the year born answer
var yearBorn = prompt ("What year were you born?");
console.log(yearBorn);

//Current year - year born

var currentYear = 2014;

//Calculate the age
var age = currentYear - yearBorn;

//alert the user with their age
alert(name+ " you are " +age+ " years old.");
