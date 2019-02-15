function truthCheck(elments, keyToCheck) {
  var checkTruthy = (currentValue) => Boolean(currentValue[keyToCheck]);
  return elments.every(checkTruthy)

}

export {
  truthCheck,
};