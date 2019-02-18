
function tripleAndFilter(numArr) {
  return numArr.map(multiplyByThree).filter(DivideByfive);
}

var multiplyByThree = num => num * 3;
var DivideByfive = num => num % 5 == 0;

export {
  tripleAndFilter,
};
