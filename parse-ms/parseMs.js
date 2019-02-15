
function parseMs(value) {
  let milliseconds = Math.abs(value);
  let days, hours, minutes, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hours = Math.floor(minutes / 60);
  minutes = minutes %60 ;
  days = Math.floor(hours / 24);
  hours = hours % 24;
  milliseconds = milliseconds % 1000;
  const parsedDayTimeObj = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds
  }
  if (value < 0) {
    for (let key in parsedDayTimeObj) {
      parsedDayTimeObj[key] *= -1;
    }
    return parsedDayTimeObj;
  }
  return parsedDayTimeObj;
}

export {
  parseMs,
};
