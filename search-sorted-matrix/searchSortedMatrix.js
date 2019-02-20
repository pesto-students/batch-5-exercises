function searchArray(array, search) {
  return array.findIndex(element => element === search) > -1;
}

function searchSortedMatrix({ search, matrix }) {
  return matrix.findIndex(element => searchArray(element, search)) > -1;
}

export {
  searchSortedMatrix,
};
