/* eslint-disable no-param-reassign */

function negativeIndex(elements) {
  if (!Array.isArray(elements)) {
    throw TypeError();
  }

  const handler = {
    get: (obj, prop) => {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(prop)) {
        prop = parseInt(prop, 10);
        if (prop < 0) {
          prop += obj.length;
        }
      }
      return obj[prop];
    },
    set: (obj, prop, newValue) => {
      if (prop < 0) {
        prop += obj.length;
      }
      obj[prop] = newValue;
      return true;
    },
  };
  return new Proxy(elements, handler);
}

export {
  negativeIndex,
};
