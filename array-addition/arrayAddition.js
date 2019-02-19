
function arrayAddition(elements1, elements2) {
  const result = [];
  let counter = 0;
  const lengthOfArray1 = elements1.length;
  const lengthOfArray2 = elements2.length;
  if (lengthOfArray1 === 0 || lengthOfArray2 === 0) {
    return (lengthOfArray1 === 0) ? elements2 : elements1;
  }
  while (counter < lengthOfArray1 && counter < lengthOfArray2) {
    result.push(elements1[counter] + elements2[counter]);
    counter += 1;
  }
  return result;
}

export {
  arrayAddition,
};
