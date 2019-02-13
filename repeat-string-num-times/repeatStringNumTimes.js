function repeatStringNumTimes(pattern, count) {
  var finalPattern = pattern;
  if (count < 0) {
    return "";
  }
  for (var i = 1; i < count; i++) {
    finalPattern += pattern;
  }
  return finalPattern;
}

export { repeatStringNumTimes };
