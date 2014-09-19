/*
Chelsie Saunders
September 12 ,2014
Conditionals Wacky
*/
//Cootie Catcher

alert("Ask a yes or no question");
// First set of choices 3, 4, 5, 6
var num = prompt("Pick (enter) a number: 3, 4, 5 or 6");
var firstVariable = num % 2;
//console.log(firstVariable);

var secondVariable;
var thirdVariable;
if(firstVariable === 1){
    // Second set of colors red, orange, yellow, black
    var colorOne = prompt("Pick (enter) a color: red, orange, yellow or black");
        if(colorOne === "red" || "orange"){
            secondVariable = prompt("Pick (enter) a color: red, orange, yellow or black");
                if(secondVariable="red"){
                    alert("The answer is No");
                }else if(secondVariable = "orange"){
                    alert("The answer is Yes");
                }else if(secondVariable = "yellow"){
                    alert("The answer is Maybe");
                }else{
                    alert("The answer is Not Sure");
                }
        }else{
            secondVariable = prompt("Pick (enter) another color: purple, green, blue, pink");
        }
}else{
    // second set of colors purple, green, blue, pink
    var colorTwo = prompt("Pick (enter) another color: purple, green, blue, pink");
}

                                    //red
                                  //orange
                               //yellow
                              //black
 alert("The answer is cloudy. Ask again Later");    //purple
 alert("The answer is Definitely");                           //green
 alert("The answer is Unlikely");                             //blue
 alert("The answer is Perhaps");                              //pink