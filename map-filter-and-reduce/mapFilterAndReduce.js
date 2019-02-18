
function mapFilterAndReduce(list) {
  return list.filter(obj => obj.firstName.length < 5)
    .reduce((resultObj, curObj) => {
      const result = { ...resultObj };
      result[curObj.firstName] = curObj.firstName.length;
      return result;
    }, {});
}

export {
  mapFilterAndReduce,
};
