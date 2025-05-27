class Person {
  constructor(name, occupation, pay) {
    this.name = name;
    this.occupation = occupation;
    this.pay = pay;
  }

  comparePay(person) {
    const difference = Math.abs(this.pay - person.pay);
    if (this.pay > person.pay) {
      console.log(`${this.name} earns ${difference} more than ${person.name}`);
    } else if (this.pay < person.pay) {
      console.log(`${this.name} earns ${difference} less than ${person.name}`);
    } else {
      console.log(`${this.name} earns as much as ${person.name}`);
    }
  }
}

const person1 = new Person('Michael', 'JS-programmer', 5000);
const person2 = new Person('Lena', 'Python-programmer', 1500);
const person3 = new Person('Brad', 'Teacher', 800);

console.log("First person's name: " + person1.name);
console.log("Second person's job: " + person2.occupation);
console.log("Third person's pay: " + person3.pay + '\n');

person1.comparePay(person2);
person3.comparePay(person2);
person3.comparePay(person3);
