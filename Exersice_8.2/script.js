class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  name() {
    return this.lastname + ' ' + this.firstname;
  }
}

class Customer extends Person {
  constructor(firstname, lastname, id, spent = 0) {
    super(firstname, lastname);
    this.id = id;
    this.spent = spent;
  }

  bonus() {
    if (this.spent > 5000) {
      return 'gold';
    } else if (this.spent > 1000) {
      return 'silver';
    } else {
      return 'basic';
    }
  }
}

var person = new Person('Natalia', 'Normal');
var customer1 = new Customer('Pete', 'Programmer', 1);
var customer2 = new Customer('Cara', 'Coder', 2, 1500);
var customer3 = new Customer('Gilbert', 'Goldson', 3, 8000);

console.log(person.name());
console.log(customer1.name());
console.log(customer1.bonus());
console.log(customer2.name());
console.log(customer2.bonus());
console.log(customer3.name());
console.log(customer3.bonus());
