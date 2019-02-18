
function allOfConditions(function1, function2) {
  return (input) => {
    const result = function1(input);
    if (result && function2) function2(input);
  };
}

export {
  allOfConditions,
};
