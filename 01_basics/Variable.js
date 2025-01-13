/*There are 3 ways to declare varibles in Js*/
/*Explore Differences Between the var and let Keywords: also why let introduced in ES6:
-> One of the biggest problems with declaring variables with the var keyword is that you can overwrite 
variable declarations without an error.*/

var camper ='James';
var camper ='David';
console.log(camper);  //David

	/*► Compare Scopes of the var and let Keywords:
->When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.*/

var numArray =[];
for(var i =0;i <3;i++)
{
	numArray.push(i);
}
console.log(numArray);
console.log(i); 

// -> Const is also used to declare a variable in ES6.
// -> declare a read only variable using const, one can not change the value of variable declared using const.
// ->It’s a good practice to write constant variable name in capital like,
const ONE_TWO = 12;
//const ONE_TWO = 23; will give error.

