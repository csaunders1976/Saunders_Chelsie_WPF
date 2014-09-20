/*
Chelsie Saunders
September 12 ,2014
Conditionals Personal
 */

//This is where I am going to do my Ternary Operator for the requirements of this assignment

//First I need to remind myself of the structure of a Ternary (condition) ? do if true : do if false

/* I would like to finish my homework. It has been a really heartbreaking week and I need some help with my focus.
I will reward myself if I complete my homework. Normal getting my homework done is award enough but with the death of a
close friend and co-worker I have had difficulty concentrating.
 */

//I will create my statement in English
// (If get my homework done before 5pm) ? I will take my husband out for dinner : I will not be able to go out to dinner;

// I will create my givin's:

//I will have to create a boolean for if my homework is completed
var homework = prompt("Did you get your homework done? (true or false please)");
//I need to create a while loop to validate the prompt
while(homework ===""){
    //prompt the user to type in information again
    homework = prompt("Did you get your homework done? (true or false please) \n Seriously, answer the question.");
}

//I will have to create a prompt in order to ask for the time of completion
var time = prompt("What time did you finish your homework? (Military time in this format '1300' please.)");
while(time==="" || isNaN(time)){
    time = prompt("Something went wrong, retype in only a number:")
}

//this is my attempt at the ternary. I referred to line 9 for structure and line 15 for content.
(homework === "true" && time <= 1700) ? alert("Good job. Take your man out for dinner!") : alert("It looks like you get ramen noodles tonight.");

