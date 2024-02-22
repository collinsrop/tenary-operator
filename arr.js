"use strict";
//use of tenary operator
let number = 12;
let isDivisisbleBy2 = number%2==0 ? "even" : "odd";//boolean value
console.log(isDivisisbleBy2);
//tenary
let  numbers=[1,2,3,4,5,6,7,8,9,10];
let maxValue = numbers.reduce(maximum);
function maximum(max, no){
   return no > max ? no : max;
}
console.log(maxValue);