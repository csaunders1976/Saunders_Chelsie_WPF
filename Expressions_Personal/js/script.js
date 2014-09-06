/*
Chelsie Saunders
September 6 ,2014
Expressions Personal
 */
//How many boxes of flooring??

// I want to know how much flooring I need to buy in order to have new floors.

//Givens
//Width of the room
    //I need to create a variable that represents the width of the room. It has to have a prompt so the data can be entered.
var width = prompt("What is the width of the room (in feet)?");
//length of the room
    //I need to create a variable that represents the length of the room. It has to have a prompt so the data can be entered.
var length = prompt("What is the length of the room (in feet)?");
//square footage covered in each box
var box = 13;
//variable for result
    //This is where I need create my equation.
var result = width*length/box;
//What needs to be printed out in the console and the alert
//"You will require " + result + " boxes of flooring" + "to cover " + x + "square feet of floor"
alert("You will require " + result + " boxes of flooring to cover " + width * length + " square feet of floor.");
console.log("You will require " + result + " boxes of flooring to cover " + width * length + " square feet of floor.");