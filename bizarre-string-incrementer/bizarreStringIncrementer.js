
function bizarreStringIncrementer(sampleString) {
  const lastChar = sampleString.slice(-1);
  if (isNaN(lastChar)) {
    return `${sampleString}1`;
  }
  const arrayOfAll = sampleString.split('');
  const arrayWithNumbers = arrayOfAll.filter(x => !(isNaN(x)));
  const counts = [];
  for (var i = 0; i < arrayWithNumbers.length; i++) {
    var num = arrayWithNumbers[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  const numOfZeros = counts[0];
  const numberInTheString = Number(arrayWithNumbers.slice(numOfZeros,).join(''));
  const theStringZeros = Array(numOfZeros).fill(0).join('');
  const arrayWithChars = arrayOfAll.slice(0, -(arrayWithNumbers.length));
  if (numOfZeros > 1) {
    return `${arrayWithChars.join('')}${theStringZeros}${numberInTheString+1}`;
  }
  return `${arrayWithChars.join('')}${numberInTheString+1}`;
}

export {
  bizarreStringIncrementer,
};
