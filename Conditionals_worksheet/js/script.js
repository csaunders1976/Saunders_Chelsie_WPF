/*
Chelsie Saunders
September 11 ,2014
Conditionals_worksheet
 */

/*****Group 1: Expressions with Conditionals*****/

//***Celsius to Fahrenheit converter

/*Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered.
 If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit,
 the calculator should convert to Fahrenheit.*/

//Givens:

//Unit (a string holding an “F” or a “C”)
////var convert = prompt("Would you like to convert the temperature to Fahrenheit (enter F) or Celsius (enter C)?");

//Degrees (in F or C)
////var degree = prompt("What degree do you want to convert?");

/***if(convert === "F"){
   var result = degree *(9/5)+32;
    alert("The temperature is "+result+" degrees Fahrenheit.");
}else{
   var result = (degree-32) * 5/9;
    alert("The temperature is " +result+ " degrees Celsius");
}***/

//Celsius to Fahrenheit:   (°C × 9/5) + 32 = °F
//Fahrenheit to Celsius:   (°F − 32) x 5/9 = °C


/* Data Sets to Test: (Note that data sets are not the only numbers that should work with your code.)
32F is 0C
100C is 212F
90F is 32.22C */

//-----------------------------------------
//***Last Chance for Gas!

/*A driver has to determine if they can make it across the desert with their current fuel.
They are about to past the last gas station for the next 200 miles and they need to determine
whether they should stop now for gas or not.*/


//    Given:
//Gas efficiency of the car (in mpg)
var mpg = 18;
// Gauge reading of the gas tank (in %)
var gauge = .25;
//Car’s gas tank capacity (in gallons)
var tank = 15;

//Result To Print Out:
if(){
    alert( "Yes, you can make it without stopping for gas!");
}else{
    alert("You only have X gallons of gas in your tank, better get gas now while you can!");
}

//------------------------------------------
//*******************************************
/*****Group 2: Multiple Results*****/

//***Grade Letter Calculator

/*A student earns a number grade at the conclusion of a course at Full Sail.
Determine the appropriate letter grade for that number using conditional statements.
 */

/*    Assume grades are whole numbers that never go below 0 or above 100.
Use the FullSail Grade scale.
    There should be only one print out to the console.

    Given:
Grade (in percent)
Result To Print Out:
    “You have a X%, which means you have earned a(n) X in the class!”*/

//***Check the Login

/*Make sure the user has the correct username and password.
If the username doesn’t match then a specific message for that should be printed to the console.
If the password doesn’t match a message should appear for that, etc. Only one error message should appear.
 */

/*    Given:
Username entered by user
Password entered by user
Correct username
Correct password
Result To Print Out:
    “Welcome, (place their username here)!”  - if the username and password is correct
“User not found. Try again.” -if the username does not match
“Password does not match our records.”  -if the username matches but the password does not*/

/******Group 3: Multiple Conditions*****/

/***Tire Pressure I

To meet to maintenance standards a car’s front two tires should have the same pressure and the back two tires should have the same pressure.  But the front tires and the rear tires can have different pressure than each other, so it is not necessary for all four tires’ pressure to be the same. Create a single conditional that would determine if the tires of a given car are up to spec.


    Given:
Pressure for each tire of the car (in psi) in an array.
    Result To Print Out:
    “The tires pass spec!” Or  “ Get your tires checked out!”

/***Movie Ticket Price

/*The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
    Determine which of the two prices the customer is eligible for.*/

/*Given:
    Time of Movie (Assume whole numbers here)
Age of the customer
Result To Print Out:
    “The ticket price is X”*/

