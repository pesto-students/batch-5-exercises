
function daysInMonth(year, month) {
  const numDays = new Date(year, month, 0).getDate();
  return numDays;
}

export {
  daysInMonth,
};
