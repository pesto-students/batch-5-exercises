
function binarySearch(input, searchItem) {
  if (Array.isArray(input)) {
    let start = 0;
    let end = input.length - 1;
    let mid = Math.floor(start + end / 2);

    while (searchItem !== input[mid] && start < end) {
      if (searchItem < input[mid]) {
        end = mid - 1;
      } else if (searchItem > input[mid]) {
        start = mid + 1;
      }
      mid = Math.floor(start + end / 2);
    }
    return (input[mid] !== searchItem) ? -1 : mid;
  }
  return -1;
}

export {
  binarySearch,
};
