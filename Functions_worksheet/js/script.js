/*
Chelsie Saunders
September 21 ,2014
Functions_worksheet
 */

//---------------------- Circumference --------------------------

// Calculate the circumference of a circle.

// Parameter(s) for function:
// Radius of the circle . I will have to make it a prompt. I need more commits!
var radius = prompt("What is the radius of your circle?");
while (max === "" || isNaN(max)) {
    //re-prompt the use
    max = prompt("Please enter the radius. Numbers only please!");
}

// ----------------------* function for calculating circumference *----------------------------------------------
function calcCir(r){
    // formula for circumference of the circle
    var cir = r * 2 * Math.PI;// Yeah, I am a bad girl. I read ahead again. I had to add the Math.PI so things are neat and tidy.
// Return: I need to return this value so I can calculate my result
    return cir;
}
//----------------------------END OF FUNCTION-----------------------------------//

//This is the result variable. It calls the function and gives the needed argument to calculate the function.
var result = calcCir(radius);
// Result to print to the console:
console.log("The circumference of the circle is " + result.toFixed(3));
alert("The circumference of the circle is " + result.toFixed(3));


//--------------------- Stung! -------------------------------------

// It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

// Victim’s weight (in pounds)
var weight = prompt("What is the weight (in pounds) of the animal subjected to bee stings?");
while (max === "" || isNaN(max)) {
    //re-prompt the use
    max = prompt("Please enter the weight. Numbers only please!");
}

// --------* function for calculating how many stings from a bee does it take to kill an animal *------------------
function killerBee(w){
    //formula for calculating how many bee stings to kill
    var death = w / 8.666666667;
// Return: I need to return this value so I can get a result outside of this function
    return death;
}
//----------------------------END OF FUNCTION-----------------------------------//

//This is the result variable. It calls the function and provides the argument that the function will use.
var stings = killerBee(weight);

// Result to print to the console:
console.log("It takes " + Math.ceil(stings) + " bee stings to kill this animal.");/// I don't really understand how you can get a partial sting so I added the Math.ceil to round up


