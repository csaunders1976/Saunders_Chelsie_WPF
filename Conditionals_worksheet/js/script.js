/*
Chelsie Saunders
September 12 ,2014
Conditionals_worksheet
 */

/*****    Group 1: Expressions with Conditionals   *****/

/*****    Celsius to Fahrenheit converter     ******/

//Givens:
//Unit (a string holding an “F” or a “C”) --I created a prompt to find out if the user wants the conversion to be
var convert = prompt("Would you like to convert the temperature to Fahrenheit (enter F) or Celsius (enter C)?");

//Degrees (in F or C)
var degree = prompt("What degree do you want to convert?");
//create variable for the result
var result;
if(convert === "F"){
   result = degree *(9/5)+32;  //this is the formula for C to F
    alert("The temperature is "+result+" degrees Fahrenheit.");
    console.log("The temperature is "+result+" degrees Fahrenheit.");
}else{
   result = (degree-32) * 5/9;  //this is the formula for F to C
    alert("The temperature is " +result+ " degrees Celsius");
    console.log("The temperature is " +result+ " degrees Celsius");
}


//-----------------------------------------
//***Last Chance for Gas!

//    Given:
//Gas efficiency of the car (in mpg)
var mpg = 22;
// Gauge reading of the gas tank (in %)
var gauge = prompt("What percentage do you have in your tank?");
//Car’s gas tank capacity (in gallons)
var tank = 20;

var gas = tank*gauge/100;
var risk = gas * mpg;
//Result To Print Out:
if(risk >= 200){
    alert( "Yes, you can make it without stopping for gas!");
    console.log( "Yes, you can make it without stopping for gas!");
}else{
    alert("You only have "+gas+ " gallons of gas in your tank, better get gas now while you can!");
    console.log("You only have "+gas+ " gallons of gas in your tank, better get gas now while you can!");
}

//------------------------------------------
//*******************************************
/*****        Group 2: Multiple Results      *****/

/***    Grade Letter Calculator        ***/

/*
 Full Sail Grade Scales
 A+ 95-100  4.0
 A  90-94   3.5
 B+ 85-89   3.0
 B  80-84   2.5
 C+ 76-79   2.0
 C  73-75   1.5
 D  70-72   1.0
 F  0-69    0.0
 */

//    Given:
//Grade (in percent)
var grade = prompt("What is your current percentage in this class?");
var letter;
if(grade >= 95){
    letter = "A+";
}else if (grade <= 94 && grade >= 90){
    letter = "A";
}else if (grade <= 89 && grade >= 85){
    letter = "B+";
}else if (grade <= 84 && grade >= 80){
    letter = "B";
}else if (grade <= 79 && grade >= 76){
    letter = "C+";
}else if (grade <= 75 && grade >= 73){
    letter = "C";
}else if (grade <= 72 && grade >= 70){
    letter = "D";
}else{
    letter = "F"
}
//Result To Print Out:
alert("You have a " +grade+"%, which means you have earned a(n) "+letter+" in the class!");
console.log("You have a " +grade+"%, which means you have earned a(n) "+letter+" in the class!");
//---------------------------------------------
/***        Check the Login           ***/

//    Given:
//Username entered by user
var userName = prompt("What is your username?");
console.log(userName);
//Password entered by user
var userPassword = prompt("What is your password?");
console.log(userPassword);
//Correct username
var correctUserName = "JoeBlow";
//Correct password
var correctPassword = "I Love Cheese";
//Result To Print Out:
if(userName === correctUserName && userPassword === correctPassword){
    alert("Welcome, "+userName+"!"); //-if the username and password is correct
    console.log("Welcome, "+userName+"!"); //-if the username and password is correct
}else if (userName != correctUserName && userPassword === correctPassword){
    alert("User not found. Try again.");  //-if the username does not match
    console.log("User not found. Try again.");  //-if the username does not match
}else if (userName === correctUserName && userPassword != correctPassword) {
    alert("Password does not match our records."); //-if the username matches but the password does not"
    console.log("Password does not match our records."); //-if the username matches but the password does not"
}
//---------------------------------------------------------------
/****************   Group 3: Multiple Conditions   ****************/

/*******  Tire Pressure I ********/

//    Given:
//Pressure for each tire of the car (in psi) in an array.
var pressure = [];
//I need to create a prompt for each tire pressure from the user
pressure[0] = prompt("What is the pressure of the front driver's-side tire?");
pressure[1] = prompt("What is the pressure of the front passenger's-side tire?");
pressure[2] = prompt("What is the pressure of the rear driver's-side tire?");
pressure[3] = prompt("What is the pressure of the rear passenger's-side tire?");

//I created a ternary style conditional....just to see if I could do it ;)
(pressure[0] === pressure [1] && pressure [2] === pressure[3]) ?  alert("The tires pass spec!") : alert("Get your tires checked out!");

//-----------------------------------------------------------------
/********    Movie Ticket Price   ********/

//Given: I will create all the variables for the equation
//Time of Movie (Assume whole numbers here) -- I will create a variable for the time of the movie
    //it will require a prompt so I can find out what time the user wants to see the movie
var time = prompt("What time is your movie? (military time without \':\' ie. 1300 for 1:00pm)");

//Age of the customer -- I will create a variable with prompt to find the users age
var age = prompt("What is your age?");

//Ticket Price -- I will create a variable for the conditional statement
var ticketPrice;

//I will create my conditional statement
if(age >= 55 || age < 10){  //this condition measures if the age of the user qualifies them for the discounted ticket
    ticketPrice = 7.00;
}else if(time >= 1500 && time <= 1700){ //this condition measures if the time of the movie qualifies for the discount
    ticketPrice = 7.00;
}else{
    ticketPrice = 12.00;
}
//Result To Print Out:
alert("The ticket price is $"+ticketPrice.toFixed(2)+".");
console.log("The ticket price is $"+ticketPrice.toFixed(2)+".");
//------------------------------------------------------------------

