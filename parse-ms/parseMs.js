function parseMs(milisSeconds) {
  milisSeconds = Math.abs(milisSeconds);

  const formatedMiliSeconds = {
    days: (milisSeconds / (24 * 60 * 60 * 1000)).toFixed(1),
    hours: (milisSeconds / (60 * 60 * 1000)).toFixed(1),
    minutes: (milisSeconds / (60 * 1000)).toFixed(1),
    seconds: (milisSeconds / 1000).toFixed(1),
    milliseconds: (milisSeconds).toFixed(1),
  }
  return formatedMiliSeconds;
}

export {
  parseMs,
};