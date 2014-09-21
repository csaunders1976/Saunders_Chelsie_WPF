/*
Chelsie Saunders
September 21 ,2014
Functions_worksheet
 */

/*

 Comment each line of code appropriately. Comment, comment, comment!
 Write the givens as variables, and pass the givens to the function using arguments.
 The calculations should be within the functions and the function should return the result to the result variable.
 Create a variable for your result (don’t forget!)
 Print the result using the result variable and the appropriate message outside the function. (Do not print from the functions you create)
 There should be a minimum of 20 commits to your git repository.
 This should all be done in a single project and single .as file.

 */


//----------------------Example:
//Problem: Calculate the area of a rectangle given the width and height of the rectangle.

//Calculate the Area of a Rectangle
 var width = 5;
 var height = 6;
 var area = calculateArea(width, height);
 console.log("The Area of the Rectangle is " + area);

 function calculateArea(w, h)
 {
 return w * h;
 }
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
console.log("The circumference of the circle is " + result);

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
