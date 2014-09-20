/*
Chelsie Saunders
September 20 ,2014
Conditionals Wacky
*/
//_________________________Cootie Catcher___________________________
// Remember the Cootie Catchers or Fortune tellers we use to make in elementary school. I wanted to create a virtual one.

//This is an alert that ask the user what question about their future they may have
alert("Ask a yes or no question \n (keep it to yourself)");

//Just like a paper cootie catcher the first four options are typically numbers
// First set of choices 3, 4, 5, 6
var num = prompt("Pick (enter) a number: 3, 4, 5 or 6");
//I need to create a while loop to validate my prompt
while(num==="" || isNaN(num)){
    num = prompt("Something went wrong, retype in only a number:")
}
console.log("The first option you picked is "+ num +".");

//Givens
//This variable will be used to determine if the first number chosen is odd or even. I will use this to determine the first option
var firstVar = num % 2;
//This variable I will use to determine the first set of answers
var secondVar;
// This variable I will use to determine the second set of answers. I could of used just one variable.
// I just thought this would be easier for me to process
var thirdVar;

//This Condition provides the second set of variables
if(firstVar === 1){
    // Second set of colors red, orange, yellow, black
    var colorOne = prompt("Pick (enter) a color: red, orange, yellow or black");
    while(colorOne ==="") {
        //prompt the user to type in information again
        colorOne = prompt("Pick (enter) a color: red, orange, yellow or black. \n If you want to know your fortune you will have to answer the question ");
    }
        console.log("The second option you picked was "+colorOne+".");
        if(colorOne === "red" || "orange") {
            secondVar = prompt("Pick (enter) a color: red, orange, yellow or black");
            while(secondVar ==="") {
                //prompt the user to type in information again
                secondVar = prompt("Pick (enter) a color: red, orange, yellow or black. \n If you want to know your fortune you will have to answer the question ");
            }
            console.log("The third option you picked was "+secondVar+". ");
            if(secondVar ==="red"){
                alert("The answer is No")
            }else if(secondVar === "orange"){
                alert("The answer is Yes")
            }else if(secondVar === "yellow"){
                alert("The answer is Maybe")
            }else{
                alert("The answer is Not Sure")
            }

        }else if(colorOne === "yellow" || "black"){
            secondVar = prompt("Pick (enter) another color: purple, green, blue, pink");
            if(secondVar === "purple"){
                alert("The answer is cloudy. Ask again Later")
            }else if(secondVar === "green"){
                alert("The answer is Definitely")
            }else if(secondVar === "blue"){
                alert("The answer is Unlikely")
            }else{
                alert("The answer is Perhaps")
            }
        }
}else{
    // second set of colors purple, green, blue, pink
    thirdVar = prompt("Pick (enter) another color: purple, green, blue, pink");
    while(thirdVar ===""){
        //prompt the user to type in information again
        thirdVar = prompt("Pick (enter) another color: purple, green, blue, pink \n You have to enter a color if you want to know your fortune.");
        }
        if(thirdVar === "purple" || "green"){
            thirdVar = prompt("Pick (enter) a color: red, orange, yellow or black");
            if(thirdVar ==="red"){
                alert("The answer is No");
            }else if(thirdVar === "orange"){
                alert("The answer is Yes");
            }else if(thirdVar === "yellow"){
                alert("The answer is Maybe");
            }else{
                alert("The answer is Not Sure");
            }
        }else{
            thirdVar = prompt("Pick (enter) another color: purple, green, blue, pink");
            if(thirdVar === "purple"){
                alert("The answer is cloudy. Ask again Later");
            }else if(thirdVar === "green"){
                alert("The answer is Definitely");
            }else if(thirdVar === "blue"){
                alert("The answer is Unlikely");
            }else{
                alert("The answer is Perhaps");
            }
        }



}

