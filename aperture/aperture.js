
function aperture(times, list) {
  const result = [];
  for (let i = 0; i < list.length; i += 1) {
    if (i + times <= list.length) {
      const pairsInTimes = list.slice(i, i + times);
      result.push(pairsInTimes);
    }
  }
  return result;
}

export {
  aperture,
};
