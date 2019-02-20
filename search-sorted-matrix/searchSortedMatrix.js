
function searchSortedMatrix(obj) {
  const { search, matrix } = obj.search;
  return matrix.reduce((acc, arr) => Boolean(acc || arr.includes(search)), true);
}

export {
  searchSortedMatrix,
};
