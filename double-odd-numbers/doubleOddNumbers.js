
function doubleOddNumbers(list) {
  return list.filter(num => num % 2 === 1).map(num => num * 2);
}

export {
  doubleOddNumbers,
};
