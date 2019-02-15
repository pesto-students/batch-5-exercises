function daysInMonth(year, month) {
  return new Date(year, month, 0).getDay();
}

export {
  daysInMonth,
};