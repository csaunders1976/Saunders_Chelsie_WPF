/*
Chelsie Saunders
September 5 ,2014
 Expressions Industry
 */

//How much am I working?
/* I often forget to record the hours that I work in freelance.
This program is made to help me input this information with ease and average the amount I work.
 */
//Givens
//I need to create an array that will hold the hours worked each day

var workHours = [];
//I need to create a prompts for each day of the working week. I will need it to enter data for each index of the array

workHours[0] = prompt("How many hours did you work on Monday?");
workHours[1] = prompt("How many hours did you work on Tuesday?");
workHours[2] = prompt("How many hours did you work on Wednesday?");
workHours[3] = prompt("How many hours did you work on Thursday?");
workHours[4] = prompt("How many hours did you work on Friday?");
/*------I used these logs to test my prompts
console.log(workHours[0]);
console.log(workHours[1]);
console.log(workHours[2]);
console.log(workHours[3]);
console.log(workHours[4]);
    */
//I will have to create a result with all  of the data that is entered into the array added up and averaged.
var totalHours = Number(workHours[0]) + Number(workHours[1]) + Number(workHours[2]) + Number(workHours[3]) + Number(workHours[4]);
//console.log(totalHours); I used this to test my totalHours variable

//I will have to create a variable that averages the total hours.
var average = totalHours/5;
//console.log(average); I used this to test my average variable

//I will have to create an alert that gives information of the total hours and the average work day.
//What I need to print out, you worked a total of X hour this week. That is an average of x hours a day.
alert("You worked a total of " +totalHours+  " hours this week. That is an average of " +average+ " hours a day.");
console.log("You worked a total of " +totalHours+  " hours this week. That is an average of " +average+ " hours a day.");