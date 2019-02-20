
function xprod(arr1, arr2) {
  return arr1
    .map(el1 => arr2.map(el2 => [el1, el2]))
    .reduce((result, curArr) => [...result, ...curArr], []);
}
// console.log(xprod([1, 2], ['a', 'b']));
export {
  xprod,
};
