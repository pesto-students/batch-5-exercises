function* generatorIterable() {
  let ind = 1;
  while (ind <= 5) {
    yield ind;
    ind += 1;
  }
}

export { generatorIterable };
