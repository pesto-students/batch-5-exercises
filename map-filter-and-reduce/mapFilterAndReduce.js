
function mapFilterAndReduce(NameList) {
  return NameList.filter((nameObj) => nameObj.firstName.length < 5)
    .reduce((nameLengthList, nameObj) => ({ ...nameLengthList, [nameObj.firstName]: nameObj.firstName.length }), {})
}

export {
  mapFilterAndReduce,
};
