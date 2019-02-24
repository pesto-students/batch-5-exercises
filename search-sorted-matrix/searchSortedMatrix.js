
function searchSortedMatrix(obj) {
  const { search, matrix } = obj;
  for (const arr of matrix) {
    if (arr.includes(search)) {
      return true;
    }
  }
  return false;
}

export {
  searchSortedMatrix,
};
