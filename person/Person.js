
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const gettingNumFromStringInArray = this.dateOfBirth.replace(/\D/g, '').split('');
    const addNumbersInArray = gettingNumFromStringInArray.reduce((a, b) => Number(a) + Number(b), 0);
    return addNumbersInArray;
  }
}

export {
  Person,
};
