function squareNumbersArray(...numberList) {
  return numberList.map(number => {
    if (typeof number !== "number") {
      throw new Error("My custom error");
    } else {
      return number * number;
    }
  });
}

export { squareNumbersArray };
