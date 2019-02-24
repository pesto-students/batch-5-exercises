function chunkArrayInGroups(arr, size) {
  const result = [];
  let i = 0;
  while (i < arr.length) {
    result.push(arr.slice(i, i + size));
    i += size;
  }
  return result;
}

export { chunkArrayInGroups };
