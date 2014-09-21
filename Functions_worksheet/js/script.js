/*
Chelsie Saunders
September 21 ,2014
Functions_worksheet
 */


//---------------------- Circumference

// Calculate the circumference of a circle.

// Parameter(s) for function:
// Radius of the circle
var radius = 5;

function calcCircumf(r){
    // Circumference of the circle
    var cir = r * Math.PI;
    return cir;
}
// Return:
var result = calcCircumf(radius);
// Result to print to the console:
console.log("The circumference of the circle is " + result.toFixed(3));

//--------------------- Stung!

// It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

// Given:
// Victim’s weight (in pounds)
// Parameter(s) for function:
// Victim’s weight (in pounds)
// Return:
// Number of Bee stings
// Result to print to the console:
// “It takes X bee stings to kill this animal.
