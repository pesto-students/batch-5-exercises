
function ackermann({ m, n }) {
  let res = 0;
  if (m === 0 && n >= 0) {
    res = n + 1;
  }
  if (n === 0 && m > 0) {
    res = ackermann(m - 1, 1);
  }
  if (m > 0 && n > 0) {
    res = ackermann(m - 1, ackermann(m, n - 1));
  }
  return res;
}

export {
  ackermann,
};
