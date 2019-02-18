import { strict } from "assert";

class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    return this.dateOfBirth.replace(/\//g, '')
      .split('')
      .reduce((total, numStr) => total += Number(numStr), 0);
  }
}

export {
  Person,
};
