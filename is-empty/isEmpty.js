import { isArray } from "util";

function isEmpty(item) {
  if ((item === null) || (typeof item === 'undefined')) {
    return false;
  } else if (item === '') {
    return true;
  } else if (isArray(item)) {
    if (item.length === 0) {
      return true;
    }
    return false;
  } else if (typeof item === 'object') {
    if (Object.keys(item).length === 0) {
      return true;
    }
    return false;
  }
  return false;
}

export {
  isEmpty,
};
