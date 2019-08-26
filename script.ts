// string
let myName = 'Sean';
// myName = 8;

// number
let myAge = 29;
// myAge = 'Sean';

// boolean
let hasHobbies = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 30;
// myRealAge = '30';

// array
let hobbies: any[] = ['film', 'music', 'studying'];
hobbies = [100];
// hobbies = 100;
hobbies = [true, false];

// tuples
let address: [string, number] = ["superstreet", 99];

// enums
enum Color {
  Gray,
  Green,
  Blue
};

let myColor: Color = Color.Green;
console.log('myColor', myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(3);

// function
// type refers to return value of function
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
// throw error if function returns anything
function sayHello(): void {
  console.log("Hello!");
  // return myName;
}

// argument types
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));

// function types
let myMultiply;
myMultiply = sayHello;
console.log(myMultiply())
myMultiply = multiply;
console.log(myMultiply(3, 3));