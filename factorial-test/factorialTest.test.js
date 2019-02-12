const factorial = number => {
  if (number > 0) {
    let fact = 1;
    while (number !== 0) {
      fact *= number;
      // eslint-disable-next-line
      --number;
    }
    return fact;
  }
  return false;
};

describe('factorial test', () => {
  test('should find factorial of an integer', () => {
    const actual = factorial(5);
    const expected = 120;

    expect(actual).toEqual(expected);
  });

  test('should find factorial of 0', () => {
    // delete next line and replace it with proper test
    expect(factorial(0)).toEqual(false);
  });
});
