const fun = () => {};

console.log(typeof fun);
describe('returnAFunction', () => {
  test('should return a Function', () => {
    expect(fun).toBeInstanceOf('string');
  });
});