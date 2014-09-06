/*
Chelsie Saunders
September 6 ,2014
Expressions Personal
 */
//How many boxes of flooring??

// I want to know how much flooring I need to buy in order to have new floors.

//Givens
//Width of the room
var width = prompt("What is the width of the room (in feet)?");
//length of the room
var length = prompt("What is the length of the room (in feet)?");
//square footage covered in each box
var box = 13;
//varible for result
var result = width * length/box;
//What needs to be printed out in the console and the alert
console.log("You will require " + result + " boxes of flooring" + "to cover " + "square feet of floor");
//It will require X amount of boxes to cover X amount of floor.
console.log("You will require " + result + " boxes of flooring" + "to cover " + "square feet of floor");
alert("You will require " + result + " boxes of flooring" + "to cover " + "square feet of floor");