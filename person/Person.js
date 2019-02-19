
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    // eslint-disable-next-line consistent-return
    const addDigitsOnly = (acc, curr) => {
      // eslint-disable-next-line no-restricted-globals
      if (curr >= 0 && curr <= 9) {
        return acc + curr;
      }
    };
    const replceNonDigit = this.dateOfBirth.replace(/\D/g);
    return [...replceNonDigit].reduce(addDigitsOnly, 0);
  }
}

export {
  Person,
};
