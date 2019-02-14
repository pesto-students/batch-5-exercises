function findElement(arr, cb) {
  const filteredList = arr.filter(cb);
  const firstFilteredMatch = filteredList[0];
  return firstFilteredMatch;
}

export { findElement };
