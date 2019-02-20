/* eslint-disable array-callback-return */

const isEmpty = arr => arr.length === 0;
const extendPair = (elements1, elements2) => {
  const smallerArray = (elements1.length > elements2.length) ? elements2 : elements1;
  const biggerArray = (elements1.length > elements2.length) ? elements1 : elements2;
  const result = [];
  smallerArray.map((currentItem) => {
    biggerArray.map((item) => {
      result.push([currentItem, item]);
    });
  });
  return result;
};
function xprod(elements1, elements2) {
  if (isEmpty(elements1) || isEmpty(elements2)) {
    return [];
  }
  return extendPair(elements1, elements2);
}

export {
  xprod,
};
