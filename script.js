// complete this js code
// Constructor function for Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Constructor function for Employee
function Employee(name, age, jobTitle) {
  // Call the constructor of the parent class (Person)
  Person.call(this, name, age);
  
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Add a method to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
