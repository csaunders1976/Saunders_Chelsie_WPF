/*
Chelsie Saunders
September 21 ,2014
Functions Industry
 */
/// Typography Calculator

// I don't really know the exact details about what make a point, a pixal or an EM. I decided to compare
//of them to gain a better understanding
// a point is 1/72 of an inch
// a pixel is 1/96 of an inch

/////_____this is just me thinking my calculation through
//points = pixels * 72 / 96
//points * 96 = pixels * 72
// (points * 96)/72 = pixels
// now it is time to write it in code

//Givens

//This alert just explains what we are doing
alert("We are going to calculate how many pixels your font measures");
var points = prompt("How many points is your font?");
while(points ==="" || isNaN(points)){
    prompt("How many points is your font? Numbers only please");
}

//--------------------Anonymous Function--------------------------
var convert = function(p){
    // my formula written in code
    var num = p * 96 / 72;
    //return value
    return num
}
//-------------------End of Function----------------------------

var result = convert(points);

//I used the console log to test my math
//console.log(result);

//results
console.log(points + "points is equal to "+ result + " points");