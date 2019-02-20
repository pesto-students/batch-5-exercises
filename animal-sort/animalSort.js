
function animalSort(elements) {
  const sortAnimalsByNoOFLegs = (animalA, animalB) => {
    const sortByNoOfLegs = animalA.numberOfLegs - animalB.numberOfLegs;
    const sortByName = animalA.name.charCodeAt(0) - animalB.name.charCodeAt(0);
    return sortByNoOfLegs || sortByName;
  };
  return elements.sort(sortAnimalsByNoOFLegs);
}

export {
  animalSort,
};
