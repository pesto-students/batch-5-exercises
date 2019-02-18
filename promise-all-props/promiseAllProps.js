
function promiseAllProps(objectToPromisefy) {
  const newObject = {};
  for (const [key, value] of Object.entries(objectToPromisefy)) {
    console.log(key, value);
  }
  return newObject;
}

export {
  promiseAllProps,
};
