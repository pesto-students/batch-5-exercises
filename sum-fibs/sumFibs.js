
function sumFibs(num) {
  var sumOfFirstTwoOddFibNos = 2;
  var sum = sumOfFirstTwoOddFibNos;
  var n1 = 1, n2 = 1;
  var fibNo = n1 + n2;
  while (fibNo <= num) {
    var isOddNo = fibNo % 2 !== 0;
    if (isOddNo) {
      sum += fibNo;
    }
    n1 = n2;
    n2 = fibNo;
    fibNo = n1 + n2;
  }
  return sum;
}

export {
  sumFibs,
};
