/*
Chelsie Saunders
September 21 ,2014
Functions Wacky
*/
//Naughty Tribbles

/* I originally had breeding bunnies. I figured that I had to consider that a large portion
of rabbits were born male. I was not sure I could calculate that. Fortunatly I am a Star Trek Fan
and remembered that Tribbles are asexual and born pregnant. That would certainly make things
easier to calculate.R.I.P Gene Roddenberry*/




// Tribbles can produce up to 10 offspring every 12 hours.
// I will have to multiply the starting amount of tribbles by 10 plus the original amount of tribbles.
// Rather than multiplying by ten I am going to use Math.round 1 - ten to consider tribble mortality
// Then I will have to multiply that number every 12 hours.


/*Givens-----------------------------------------------------------------
 How many hours lapsed
 how many starting Tribbles*/
var tribbles = prompt("How many Tribbles do you have?");
//validate prompt
while( tribbles==="" || isNaN(tribbles)) {
    //reprompt the user
    tribbles = prompt("Please enter a number... or this won't work!");
}

var time = prompt("How many hours have passed?");
while( time==="" || isNaN(tribbles)) {
    //reprompt the user
    time = prompt("Please enter a number... or this won't work!");
}

//*************************** Anonymous function ****************************************//
//Sorry there are so many comments. I figured I should show my work.
var fertility = function (trib,hours){
    //calculation to find how many tribbles reproduce over times
//    var crazyTribbles = (Math.round(trib + trib * Math.random()*(10)) )*(hours/12);
// Now that I have tested this I got a result of 64. I want to see if my math is right so I will test it without the Math.random
// Now that I have tested my math I have figured out that my math is terribly wrong.
// My numbers are not anywhere near Mr. Spock's.
// I am going to have to use exponents.


//The JavaScipt for exponents is Math.pow(base, exponent);
    //var crazyTribbles = (Math.round(trib + trib * 10)); ********Now I want to apply this with a mortality rate...
    // I must consider that some of the tribbles have consumed some of the tainted grain and have died. (Sorry if you are not a Treky)

    var crazyTribbles = (Math.round(trib + trib * Math.random()*(10)) );
//Hooray! This is the correct calculation. Spock would be proud!
    var furEverywhere = Math.pow(crazyTribbles, hours/12);
    //return value
    return furEverywhere;
}
//**************************END OF FUNCTION**********************************************//

// this is the variable to catch the number from the  fertility function
var result = fertility(tribbles, time);

//I have to create an alert for my result.... but if not enough time for gestation to complete I will need a different alert.
if (time < 12){
    alert("There has not been enough time for the tribbles to reproduce.");
}else{
    alert("You have approximately " + Math.round(result) + " tribbles filling up the Enterprise.")
}