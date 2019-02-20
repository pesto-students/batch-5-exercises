
function without(arrayOne, arrayTwo) {
  const filteredArrayTwo = arrayTwo.filter(element => !(arrayOne.includes(element)));
  return filteredArrayTwo;
}

export {
  without,
};
