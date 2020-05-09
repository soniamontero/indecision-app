class Person {
  constructor(name = 'Anonymous', age = 0) {
    // this refers to the class instance.
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Helloooo I'm ${this.name} and I'm ${this.age}!`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor) {
      description += ` I'm studying ${this.major}`
    }

    return description
  }
}


class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.homeLocation = location;
  }

  homeLocation() {
    return this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` Travelling from ${this.homeLocation}`
    }
    return greeting;
  }
}

const me = new Student('Sonia Montero', 26, 'computer science');
const traveler = new Traveler('Sonia Montero', 26, 'France');
console.log(me.getGreeting())
console.log(me.hasMajor())
console.log(traveler)
console.log(traveler.getGreeting())

const other = new Student();
console.log(other.getGreeting())