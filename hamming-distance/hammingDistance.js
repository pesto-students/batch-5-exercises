function hammingDistance(str1, str2) {
  const equalLengths = str1.length === str2.length;
  if (!equalLengths) {
    throw new Error('Strings must be of equal lengths');
  }
  const str1Arr = str1.split('');
  const str2Arr = str2.split('');
  return str1Arr.reduce(
    (result, ch, i) => {
      if (ch === str2Arr[i]) {
        return result;
      }
      return result + 1;
    }, 0,
  );
}

export {
  hammingDistance,
};
