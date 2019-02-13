function isOdd(n) {
  var last = Number(n.toString().slice(-1));
  return !(last == 0 || last == 2 || last == 4 || last == 6 || last == 8);
}

export { isOdd };
