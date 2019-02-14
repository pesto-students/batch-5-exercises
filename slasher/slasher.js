function slasher(arr, n) {
  return arr.filter((el, ind) => ind >= n);
}

export { slasher };
