
// function queue(...args) {
//   return args;
// }

class Queue {
  constructur() {
    this.queue = {};
  }

  enqueue(input) {
    let numKey;
    if (Object.entries(this.queue).length === 0) {
      numKey = 0;
    } else {
      numKey = Object.keys(this.queue).length;
    }
    if (typeof input === 'number') {
      this.queue[numKey] = input;
    } else {
      this.queue[input.key] = input.value;
    }
  }

  toString() {
    const arrayOfKeys = Object.keys(this.queue);
    const queueString = arrayOfKeys.join(',');
    return queueString;
  }
}

export {
  Queue,
};
