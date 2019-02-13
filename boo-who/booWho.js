
function booWho(...args) {
  const booleanTypes = [true, false];
  return booleanTypes.includes(args[0]);
}

export {
  booWho,
};
