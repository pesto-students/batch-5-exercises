

function hammingDistance(input1, input2) {
  if (input1.length !== input2.length) {
    throw Error();
  }
  const diffElement = [...input1, input2].reduce((acc, curr) => {
    const itemIndex = acc.indexOf(curr);
    if (itemIndex === -1) {
      return [...acc, curr];
    }
    return [...acc.slice(0, itemIndex), ...acc.slice(itemIndex + 1, acc.length)];
  }, []);
  return diffElement.length;
}

export {
  hammingDistance,
};
