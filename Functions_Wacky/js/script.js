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


/*Givens
 How many hours lapsed
 how many starting Tribbles*/
var tribbles = 3;
var time = 24;

var fertility = function (trib,hours){
    //calculation to find how many tribbles reproduce over times
    var crazyTribbles = (Math.round(trib + trib * Math.random()*(10)) )*(hours/12);
    //return value
    return crazyTribbles;
}
// this is the variable to catch the number from the  fertility function
var result = fertility(tribbles, time);
console.log(result);