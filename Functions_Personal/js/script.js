/*
Chelsie Saunders
September 21 ,2014
Functions Personal
 */
/// BMI Calculator

//-------FORMULA FOR CALCULTING BMI (Body Mass Index)------
//BMI = ( Weight in Pounds / ( Height in inches x Height in inches ) ) x 703
//Givens:
// Height in inches
var height = 67;
// weight in pounds
var weight = 120;

function calcBMI(h,w){
    // formula for calculated BMI
    var bmi = (w / Math.pow(h,2)) * 703;
// Return: I need to return this value so I can calculate my result
    return bmi;
}
//----------------------------END OF FUNCTION-----------------------------------//

//This is the result variable. It calls the function and gives the needed argument to calculate the function.
var bmiResult = calcBMI(height, weight);
// Result to print to the console:
console.log(bmiResult);

//---------IS YOUR Body Mass What it should be?----------------
/*
BMI
Weight Status
Below 18.5	Underweight
18.5—24.9	Normal
25.0—29.9	Overweight
30.0 and Above	Obese
*/

if(bmiResult <= 18.5){
    alert(" You body fat is " + bmiResult.toFixed(2) + "%. That is underweight. Don't be afraid to eat a hamburger.");
}else if(bmiResult > 18.5 && bmiResult <= 24.9){
    alert(" You body fat is " + bmiResult.toFixed(2) + "%. That is normal. Keep up the healthy lifestyle!");
}