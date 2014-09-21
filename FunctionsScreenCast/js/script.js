/*
Chelsie Saunders
September 21 ,2014
Functions Screen-cast
 */
//Anonymous Functions
/*
Basic structure of a function
function functionName(){
    //code the function runs
}
    */

//-----------Arguments & Parameters
    // funcName (argument1, argument2);
    // function funcName (parameter1, parameter2){
            //code the function runs
//}

//functions return something and procedures do not

//____________Anonymous Functions
/*
var functionName = function () {
    //code the function runs
}
 */

var calcArea = function(w,h){
    var area = w * h;
    return area;
}

var a  = calcArea(20, 30);
console.log(a);