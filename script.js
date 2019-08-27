"use strict";
// string
var myName = 'Sean';
// myName = 8;
// number
var myAge = 29;
// myAge = 'Sean';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 30;
// myRealAge = '30';
// array
var hobbies = ['film', 'music', 'studying'];
hobbies = [100];
// hobbies = 100;
hobbies = [true, false];
// tuples
var address = ["superstreet", 99];
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var myColor = Color.Green;
console.log('myColor', myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(3);
// function
// type refers to return value of function
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
// throw error if function returns anything
function sayHello() {
    console.log("Hello!");
    // return myName;
}
// argument types
function multiply(val1, val2) {
    return val1 * val2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));
// function types
// argument and parameter names matching doesn't matter but the order of the arguments does.  the 1st argument
// must be a number, as well as the second
var myMultiply;
// myMultiply = sayHello;
// console.log(myMultiply())
myMultiply = multiply;
console.log(myMultiply(3, 3));
// objects
// TypeScript cares about the names of properties in objects, as well as types assigned to those props
// the reason for this is that Objects are accessed by specific key names, the order doesn't matter.
var userData = {
    name: "Sean",
    age: 29
};
userData = {
    name: "Hello",
    age: 22
};
