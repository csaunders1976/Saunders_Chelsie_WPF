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
//I can't buy a percentage of a box so I read ahead on how to round numbers up. I also am lacking in the commit requirements for this project so I am going to have to complicate things.
//"You will require " + result + " boxes of flooring" + "to cover " + x + "square feet of floor"
alert("You will require " + Math.ceil(result) + " boxes of flooring to cover " + width * length + " square feet of floor.");
console.log("You will require " + Math.ceil(result) + " boxes of flooring to cover " + width * length + " square feet of floor.");

//I am going to add up the price and tax so I can get the commit requirements filled
//I will have to create a variable for the price of each box of flooring.
var boxPrice = 27.50;
// I need to create a varialbe for the sales tax rate.
var salesTax = 4.7;
//I need to create a variable that gives the sales tax.
var tax = Math.ceil(result)*boxPrice*salesTax/100;

//I need to create a alert and console log that gives the total cost of the flooring
alert("The total cost of the flooring will be $" + Number(Math.ceil(result)*boxPrice).toFixed(2) + " without tax and $"+ Number(Math.ceil(result)*boxPrice+tax).toFixed(2) + " with sales tax.");
console.log("The total cost of the flooring will be $" + Number(Math.ceil(result)*boxPrice).toFixed(2) + " without tax and $"+ Number(Math.ceil(result)*boxPrice+tax).toFixed(2) + " with sales tax.");
console.log(tax);