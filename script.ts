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
console.log('myColor545', myColor);

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
// argument and parameter names matching doesn't matter but the order of the arguments does.  the 1st argument
// must be a number, as well as the second
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// console.log(myMultiply())
myMultiply = multiply;
console.log(myMultiply(3, 3));

// objects
// TypeScript cares about the names of properties in objects, as well as types assigned to those props
// the reason for this is that Objects are accessed by specific key names, the order doesn't matter.
let userData: { name: string, age: number } = {
  name: "Sean",
  age: 29
};
userData = {
  name: "Hello",
  age: 22
};

// type alias
// storing a reusable type as a variable
type Complex = { data: number[], output: (all: boolean) => number[] };


// complex object
let complex: Complex = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[] {
    return this.data;
  }
};

let complex2: Complex = {
  data: [100, 49, 10],
  output: function (all = true) {
    return [22, 54];
  }
};

// union types
// join types if you don't want to use 'any' but you want to allow more than 1 type
let realAge: number | string = '29';
realAge = 29;
// realAge = true;

// never type
// similar to void, for if you want to be more explicit about your intention
// if you never want a function to return, appropriate for code you don't want to be reached
function neverReturns(): never {
  throw new Error('an error!');
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
// explicitly setting variables to null will allow changes to any other data type
// even with strictNullChecks option set to true in the config
let canThisBeAny = null;
canThisBeAny = 12;
canThisBeAny = 'word';

// * ES6 & TypeScript

// Default Parameters
const countdown = (start: number): void => {
  console.log("Done!", start);
};
countdown(3);

// rest operator
function makeArray(...args: number[]) {
  return args;
}
console.log('make array', makeArray(1, 3, 5));
