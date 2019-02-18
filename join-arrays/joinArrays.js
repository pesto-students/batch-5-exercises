
function joinArrays(...listOfArr) {
  return listOfArr.reduce((result, curArr) => [...result, ...curArr], []);
}

export {
  joinArrays,
};
