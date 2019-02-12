const returnAString = () => 'world';

describe('returnAString', () => {
  test('should return a string', () => {
    expect(returnAString()).toContain('world');
  });
});