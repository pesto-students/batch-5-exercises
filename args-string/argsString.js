
function argsString(input, data) {
  const keywordOfInput = input.split(' ');
  const reversedInputData = data.reverse();
  const remapTheWord = (keyword) => {
    if (keyword === '{}') return reversedInputData.pop();
    return keyword;
  };

  const reStructuredString = keywordOfInput.map(remapTheWord).join(' ');
  return reStructuredString;
}

export {
  argsString,
};
