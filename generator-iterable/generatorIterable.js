
function* generatorIterable() {
  let value = 1;
  while (value <= 5) {
    yield value;
    value += 1;
  }
}

export {
  generatorIterable,
};
