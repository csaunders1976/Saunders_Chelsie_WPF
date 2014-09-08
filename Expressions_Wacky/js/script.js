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
console.log("This is how much you weigh = "+weight);

//I need to create the formula to calculate the weight on each planet.... Weight = Mass x Surface gravity

//This is the surface gravity for each planet
var mercury = 0.38;
var venus = 0.91;
var earth = 1;
var mars = 0.38;
var jupiter = 2.36;
var saturn = 0.91;
var uranus = 0.89;
var pluto =  0.06;
var neptune = 1.12;
var moon = 0.16;

var mass = weight/earth;
console.log("This is your mass =" +mass+".");

//I will have to create a result alert for each planet.

alert("You weigh " +mercury*mass +"lbs on Mercury");
console.log("This is your weight on Mercury = " + mercury*mass + ".")
alert("You weigh " +venus*mass +"lbs on Venus");
console.log("This is your weight on Venus = " + venus*mass + ".")
alert("You weigh " +mars*mass +"lbs on Mars");
console.log("This is your weight on Mars = " + mars*mass + ".")
alert("You weigh " +jupiter*mass +"lbs on Jupiter");
console.log("This is your weight on Jupiter = " + jupiter*mass + ".")
alert("You weigh " +saturn*mass +"lbs on Saturn");
console.log("This is your weight on Saturn = " + saturn*mass + ".")
alert("You weigh " +uranus*mass +"lbs on Uranus");
console.log("This is your weight on Uranus =" + uranus*mass + ".")
alert("You weigh " +pluto*mass +"lbs on  Pluto");
console.log("This is your weight on Pluto = " + pluto*mass + ".")
alert("You weigh " +neptune*mass +"lbs on Neptune");
console.log("This is your weight on Neptune = " + neptune*mass + ".")
alert("You weigh " +moon*mass +"lbs on Moon");
console.log("This is your weight on Moon = " + moon*mass + ".")