/*
Chelsie Saunders
September 3, 2014
Expressions_worksheet
 */

/*---------Dog Years-------------- */
//Calculate Sparky's age in dog years.
//Declaring and Defining Sparky's age
var sparkysAge = 3;
//Declaring and Defining dog years
var dogYears = 7;
//Declaring and Defining result variable
var result = sparkysAge * dogYears;
//Result to Print:
console.log("Sparky is " + sparkysAge + " human years old which is " + result +  " in dog years.");

/*-------Slice of Pie part 1--------*/
//Create expression that calculates how much pizza each student will get at the party.

// Declaring and Defining Number of slices per pizza
var pizza = 6;
// Declaring and Defining Number of people at the party
var students = 11;
// Declaring and Defining Number of pizzas ordered.
var slices = 10;
// Declaring and Defining Result
var sliceResult = pizza * slices/students;

//Result to Print:
console.log("Each person ate " + sliceResult + " slices of pizza at the party.");


/*-------Slice of Pie part II--------*/
//Create expression that calculates how much of the remaining pizza goes to Sparky

// Declaring and Defining Result
var dogsSlices = pizza * slices%students;

// Result to Print:
console.log("Sparky got " + dogsSlices + " slices of pizza.");


/*------Average shopping bill--------*/
//Create an expression that will calculate the average  spent on groceries.

// Declaring and Defining the array for grocery totals
var groceries = [77.33, 80.90, 68.22, 90.91, 86.78];

// Declaring and Defining Result of total sent on groceries
var totalSpent= groceries[0] + groceries[1]+ groceries[2] + groceries[3] + groceries[4];
// Declaring and Defining average weekly grocery spending.
var average = totalSpent/5;

// Result to Print
console.log("You have spent a total of " + "$" + totalSpent + " on groceries over 5 weeks. That is an average of " + "$" + average + " per week");

/*----------Discounts------------------*/
//Create an expression that will calculate the discounted price with and without sales tax.

// Declaring and Defining of original price
var price = 10;
// Declaring and defining discount rate
var  discount = 20;
// Declaring and Defining discount percentage
var rate = price*discount/100;

// Declaring and Defining description of item
var item = "cookie";
// Declaring and Defining sales tax percentage
var salesTax = 2;

// Result Variables:

//Declaring and Defining Price of the item without tax
var withoutTax = price-rate;
// Declaring and defining tax rate
var taxRate = withoutTax * salesTax/100;
//Declaring and Defining Price of the item with tax
var withTax = withoutTax + taxRate;
//Result to Print:
console.log("Your " + item + " was originally " + "$" + price + ", but after a " + discount + "% discount, it is now $" + withoutTax + " without tax, and $" + withTax + " with tax.");