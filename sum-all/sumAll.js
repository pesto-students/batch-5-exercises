
function sumAll(arrayOfTwoNum) {
  const lowestNumber = Math.min(...arrayOfTwoNum);
  const biggestNumber = Math.max(...arrayOfTwoNum);
  let totalSum = 0;
  for (let i = lowestNumber; i <= biggestNumber; i++) {
    totalSum += i;
  }
  return totalSum;
}

export {
  sumAll,
};
