
function joinArrays(...args) {
  var arrayList = [...args];
  return arrayList.reduce((resultArr, subArr) => [...resultArr, ...subArr], []);
}

export {
  joinArrays,
};
