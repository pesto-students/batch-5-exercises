
function objectAssign(...objects) {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

export {
  objectAssign,
};
