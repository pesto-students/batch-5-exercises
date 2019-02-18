
function tripleAndFilter(list) {
  return list.map(num => num * 3).filter(num => num % 5 === 0);
}

export {
  tripleAndFilter,
};
