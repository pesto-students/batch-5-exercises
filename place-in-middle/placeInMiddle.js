
function placeInMiddle(baseList, toPlaceList) {
  const middleIndexOfBaseList = Math.floor(baseList.length / 2);
  const firstHalf = baseList.slice(0, middleIndexOfBaseList);
  const secondHalf = baseList.slice(middleIndexOfBaseList);
  return [...firstHalf, ...toPlaceList, ...secondHalf];
}

export {
  placeInMiddle,
};
