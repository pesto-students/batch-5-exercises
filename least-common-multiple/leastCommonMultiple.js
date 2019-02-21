
const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

function leastCommonMultiple(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return 0;
  }
  return Math.abs((num1 * num2) / gcd(num1, num2));
}


export {
  leastCommonMultiple,
};
