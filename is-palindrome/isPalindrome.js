
function isPalindrome(string) {
  // string = string.toLowerCase()
  const lowstring = string.replace(/[\W_]/g, '').toLowerCase();
  return lowstring === lowstring.split('').reverse().join('');
}

export {
  isPalindrome,
};
