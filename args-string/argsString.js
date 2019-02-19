
function argsString(argumentOne, argumentTwo) {
  const argOneArray = argumentOne.split(' ');
  if (argOneArray.includes('{}')) {
    for (const i of [...Array(argumentTwo.length).keys()]) {
      const index = argOneArray.indexOf('{}');
      argOneArray[index] = argumentTwo[i];
      // argOneArray.splice(index, 1);
    }
    return argOneArray.join(' ');
  }
  return argumentOne;
}

export {
  argsString,
};
