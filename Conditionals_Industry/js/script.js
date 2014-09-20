/*
Chelsie Saunders
September 12 ,2014
Conditionals Industry
 */
//------------------------------CREATING BOUNDARIES---------------------------------------//
/*I have a client that owes me quite a bit of money. He tends to pay me very late. He also asks me to do more projects
even when he has not paid me for the projects he has not paid for. He currently owes my over $2000 for a project I
did in July. I am going to use a conditional to measure if I should continue to work for him or tell him to get bent
depending on how many unpaid hours I have. I am going to use my Expressions_Industry assignment and expand on it so I create
the conditional. I know we are not suppose to use the same work as last week but I am going to justify it because the
problem is different. Last week I was recording how many hours. This week I am measuring  how many hours qualify for
continued work.*/



// I did have to make changes. I just needed the prompts from last week to build the array. That us all I used from
var workHours = [];

workHours[0] = prompt("How many hours did you work on Monday?");
//I will have to create while loops for each prompt
while(workHours[0]==="" || isNaN(workHours[0])){
    workHours[0] = prompt("Something went wrong, retype in only a number:")
}

workHours[1] = prompt("How many hours did you work on Tuesday?");
while(workHours[1]==="" || isNaN(workHours[1])){
    workHours[1] = prompt("Something went wrong, retype in only a number:")
}

workHours[2] = prompt("How many hours did you work on Wednesday?");
while(workHours[2]==="" || isNaN(workHours[2])){
    workHours[2] = prompt("Something went wrong, retype in only a number:")
}

workHours[3] = prompt("How many hours did you work on Thursday?");
while(workHours[3]==="" || isNaN(workHours[3])){
    workHours[3] = prompt("Something went wrong, retype in only a number:")
}

workHours[4] = prompt("How many hours did you work on Friday?");
while(workHours[4]==="" || isNaN(workHours[4])){
    workHours[4] = prompt("Something went wrong, retype in only a number:")
}

//------------------------------END OF VALIDATING PROMPTS--------------------------------------//


//I need to create a variable to collect the total number of hours worked
var totalHours = 0;

//I need to create a loop to add up the total amount of hours that I worked last week

for(var i=0; i<workHours.length; i++){
    totalHours = totalHours + Number(workHours[i]);
}

console.log("You have worked a total of " +totalHours+ " hours this week.");

//I have to create a conditional statement that tells me if I should keep working for this guy

if(totalHours >= 10){
    alert("You need to tell this guy he needs to pay you before you do any more work!");
    console.log("You need to tell this guy he needs to pay you before you do any more work!");
}else if(totalHours >=20){
    alert("You need to tell this guy your done working for him!");
    console.log("You need to tell this guy your done working for him!");
}else{
    alert("Be patient, you will have to keep working.");
    console.log("Be patient, you will have to keep working.");
}