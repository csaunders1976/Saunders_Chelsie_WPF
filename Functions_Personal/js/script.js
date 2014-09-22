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
var height;
// weight in pounds
var weight;

function calcBMI(h,w){
    // formula for calculated BMI
    var bmi = w / h * h * 703;
// Return: I need to return this value so I can calculate my result
    return bmi;
}
//----------------------------END OF FUNCTION-----------------------------------//

//This is the result variable. It calls the function and gives the needed argument to calculate the function.
var bmiResult = calcBMI(height, weight);
// Result to print to the console:
console.log(bmiResult);

/*
BMI
Weight Status
Below 18.5	Underweight
18.5—24.9	Normal
25.0—29.9	Overweight
30.0 and Above	Obese
*/