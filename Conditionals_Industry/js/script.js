/*
Chelsie Saunders
September 12 ,2014
Conditionals Industry
 */
//------------------------------CREATING BOUNDARIES---------------------------------------//
/*I have a client that owes me quite a bit of money. He tends to pay me very late. He also asks me to do more projects
even when he has not paid me for the projects he has not paid for. He currently owes my over $2000 for a project I
did in July. I am going to use a conditional to measure if I should continue to work for him or tell him to get bent
depending on how many unpaid hours I have. I am going to use my Expressions_Industry exersize and expand on it so I create
the conditional. I know we are not suppose to use the same work as last week but I am going to justify it because the
problem is different. Last week I was recording how many hours. This week I am measuring  how many hours qualify for
continued work.*/

//--------------------------------WORK FROM LAST WEEK---------------------------------------//

// I did have to make changes. I just needed the prompts from last week to build the array
var workHours = [];
workHours[0] = prompt("How many hours did you work on Monday?");
workHours[1] = prompt("How many hours did you work on Tuesday?");
workHours[2] = prompt("How many hours did you work on Wednesday?");
workHours[3] = prompt("How many hours did you work on Thursday?");
workHours[4] = prompt("How many hours did you work on Friday?");

//------------------------------END OF LAST WEEKS WORK--------------------------------------//


//I need to create a variable to collect the total number of hours worked
var totalHours = 0;

//I need to create a loop to add up the total amount of hours that I worked last week

for(var i=0; i<workHours.length; i++){
    console.log(Number(workHours[i]));
}

