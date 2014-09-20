/*
Chelsie Saunders
September 12 ,2014
Conditionals Wacky
*/
//_________________________Cootie Catcher___________________________
// Remember the Cootie Catchers or Fortune tellers we use to make in elementary school. I wanted to create a virtual one.

//---------------------------First Question-----------------
alert("Ask a yes or no question \n (keep it to yourself)");

//--------------------------Second Question-----------------
// First set of choices 3, 4, 5, 6
var num = prompt("Pick (enter) a number: 3, 4, 5 or 6");
//I need to create a while loop to validate my prompt
while(num==="" || isNaN(num)){
    num = prompt("Something went wrong, retype in only a number:")
}

var firstVar = num % 2;
//console.log(firstVariable);

//-------------------------Third Question-------------------Option 1
var secondVar;
if(firstVar === 1){
    // Second set of colors red, orange, yellow, black
    var colorOne = prompt("Pick (enter) a color: red, orange, yellow or black");
    while(colorOne ===""){
        //prompt the user to type in information again
        colorOne = prompt("Pick (enter) a color: red, orange, yellow or black \n You have to enter a color if you want to know your fortune.");
    }
        if(colorOne === "red" || "orange"){
//-------------------------Fourth Question-------------------Option 1
            secondVar = prompt("Pick (enter) a color: red, orange, yellow or black");
                if(secondVar="red"){
                    alert("The answer is No");
                }else if(secondVar = "orange"){
                    alert("The answer is Yes");
                }else if(secondVar = "yellow"){
                    alert("The answer is Maybe");
                }else{
                    alert("The answer is Not Sure");
                }
        }else{
            secondVar = prompt("Pick (enter) another color: purple, green, blue, pink");
                if(secondVar="purple"){
                    alert("The answer is cloudy. Ask again Later");
                }else if(secondVar = "green"){
                    alert("The answer is Definitely");
                }else if(secondVar = "blue"){
                    alert("The answer is Unlikely");
                }else{
                    alert("The answer is Perhaps");
                }
        }
//-------------------------Third Question-------------------Option 2
}else{
    // second set of colors purple, green, blue, pink
    var colorTwo = prompt("Pick (enter) another color: purple, green, blue, pink");
    while(colorTwo ===""){
        //prompt the user to type in information again
        colorTwo = prompt("Pick (enter) another color: purple, green, blue, pink \n You have to enter a color if you want to know your fortune.");
        if(colorTwo === "purple" || "green"){
//-------------------------Fourth Question-------------------Option 1
            secondVar = prompt("Pick (enter) a color: red, orange, yellow or black");
            if(secondVar="red"){
                alert("The answer is No");
            }else if(secondVar = "orange"){
                alert("The answer is Yes");
            }else if(secondVar = "yellow"){
                alert("The answer is Maybe");
            }else{
                alert("The answer is Not Sure");
            }
        }else{
            secondVar = prompt("Pick (enter) another color: purple, green, blue, pink");
            if(secondVar="purple"){
                alert("The answer is cloudy. Ask again Later");
            }else if(secondVar = "green"){
                alert("The answer is Definitely");
            }else if(secondVar = "blue"){
                alert("The answer is Unlikely");
            }else{
                alert("The answer is Perhaps");
            }
        }
    }


}

