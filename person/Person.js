class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  static calculateSum(accumulator, value) {
    const digits = value.split('');
    const sumOfDigits = digits.reduce((acc, currentValue) => acc + Number(currentValue), 0);
    return accumulator + sumOfDigits;
  }

  addDobDigits() {
    const numbers = this.dateOfBirth.split('/');
    return numbers.reduce(Person.calculateSum, 0);
  }
}

export { Person };
