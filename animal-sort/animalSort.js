
function animalSort(animals) {
  return animals.sort((anml1, anml2) => {
    if (anml1.numberOfLegs - anml2.numberOfLegs != 0) {
      return (anml1.numberOfLegs - anml2.numberOfLegs);
    }
    const nameA = anml1.name;
    const nameB = anml2.name;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;

  });
}

export {
  animalSort,
};
