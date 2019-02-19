
function animalSort(elements) {
  const sortAnimalsbyNoOFLegs = (animalA, animalB) => {
    const legs = animalA.numberOfLegs - animalB.numberOfLegs;
    if (legs !== 0) {
      return legs;
    }
    const name = animalA.name.charAt(0) - animalB.name.charAt(0);
    return name;
  };
  return elements.sort(sortAnimalsbyNoOFLegs);
}

export {
  animalSort,
};
