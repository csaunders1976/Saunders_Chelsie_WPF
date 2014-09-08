/*
Chelsie Saunders
September 7 ,2014
Expressions Wacky
 */
//How much do I weigh on the moon?
//This is my third try. I don't know how wacky it is but I think it is doable.

//Givens
//I will have to create a prompt that requests your weight
var weight = prompt("How much do you weigh in pounds?");
console.log(weight);
//I will have to create variable that contain the equations for each planet. This will require the a number that compares the gravitational pull of each planet compared to Earth.
var mercury = 0.38;
var venus = 0.91;
var mars = 0.38;
var jupiter = 2.36;
var saturn = 0.91;
var uranus = 0.89;
var pluto =  0.06;
var neptune = 1.12;
var moon = 0.16;
//I will have to create a prompt to collect the potential planet
var planet = prompt("Which heavenly body do you want to find out what you weigh on? \n Enter "+mercury+ "," + venus +","+ mars+","+ jupiter+","+ saturn+","+ uranus+ ","+ neptune+","+ pluto +","+ "or"+ moon+"? \n please do not capitalize the planets");
//I will have to create the result variable that will be printed out on the console and the final alert
var result = weight*planet;