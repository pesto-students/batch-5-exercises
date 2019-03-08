function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function uniqueRandom(min, max) {
  let prev = null;
  return () => {
    let current = getRandom(min, max);
    while (prev === current) {
      current = getRandom(min, max);
    }
    prev = current;
    return current;
  }
}

export {
  uniqueRandom,
};
