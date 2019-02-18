export class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const dobDigits = this.dateOfBirth.split('/').join('');
    return dobDigits.split('').reduce((sum, num) => sum + Number(num), 0);
  }
}
