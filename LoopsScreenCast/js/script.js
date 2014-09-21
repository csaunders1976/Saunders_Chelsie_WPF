/*
Chelsie Saunders
September 21 ,2014
Loops Screen-cast
 */

console.log('-----------------loops---------------------');
var  b = 50; // sets up the index

while ( b > 0 ){  // checks the condition
    console.log(b + " kegs on the wall");
    b--; //increments or decrements the index
}

console.log('--------------Do While Loops-----------------');

var c = 10;

do{
    console.log(c + "kegs on the wall");
    c--;
}
while( c > 0);

console.log("-------------For Loops----------------------");


for (var i=10;  i > 0; i--){
    console.log(i + "Kegs on the wall")
}