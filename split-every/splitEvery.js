
const isValidInput = num => num > 0;
function splitArray(parts, list, newList) {
  if (list.length === 0) {
    return newList;
  }
  if (list.length < parts) {
    return [...newList, list];
  }
  const arrayPart = list.slice(0, parts);
  const arrayRest = list.slice(parts);
  return splitArray(parts, arrayRest, [...newList, arrayPart]);
}

function splitEvery(parts, list) {
  if (!isValidInput(parts)) {
    throw Error('Not a Valid Input');
  }
  return splitArray(parts, list, []);
}


export {
  splitEvery,
};
