
function listOfFibs(number) {

  var fibList = [1, 1];

  for (var i = 2; i < number; i++) {
    fibList[i] = fibList[i - 1] + fibList[i - 2];
  }

  return fibList;
}

function sumFibs(number) {
  return listOfFibs(number).filter((num) => (num % 2 != 0 && num < number)).reduce((sum, num) => (sum += num), 0);
}


export {
  sumFibs,
};
