const appendLeadingZeros = (n, size) => {
  let result = n.toString();
  let i = n.length;
  while (i < size) {
    result = `0${result}`;
    i += 1;
  }
  return result;
};
function bizarreStringIncrementer(str) {
  const isStrNotEndingWithNumber = /.*[0-9]$/.test(str);
  if (!isStrNotEndingWithNumber) {
    return `${str}1`;
  }
  const numbersPresentInString = str.match(/([0-9]+)$/)[0];
  const remainingStr = str.slice(0, str.indexOf(numbersPresentInString));

  return remainingStr + appendLeadingZeros(
    (String(parseInt(numbersPresentInString, 10) + 1)),
    numbersPresentInString.length,
  );
}
// console.log(appendLeadingZeros('34', 4));
export {
  bizarreStringIncrementer,
};
