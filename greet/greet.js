
function greet(str) {
  return new Promise((resolve) => {
    const greetStr = `Hey ${str}`;
    resolve(greetStr);
  });
}

export {
  greet,
};
