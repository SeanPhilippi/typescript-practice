class Person {
  // public name (public is default so no need to explicitly say it)
  name: string;
  // declaring a private property
  // private properties can only be accessed within the object
  private type: string;
  // same as private, only they can also be accessed by objects that inherit this property
  protected age: number;

  constructor(name: string, public username: string) {
    this.name = name;
  };
  printAge() {
    console.log(this.age);
    this.setType("Old Guy");
  };
  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  };

}

const person = new Person("Sean", "kesto");
console.log(person);
console.log(person.name, person.username);

// * Inheritance

class Developer extends Person {
  name = "Sean";
  username = "kesto";
};
const dev = new Developer('Bruce', 'eygon');
console.log(dev);