
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.defineProperty(account, 'password', {
    value: 'initialPassword',
    writable: false,
  });
  try {
    account.password = 's3cret';
  } catch (TypeError) {
    // Cannot assign to read only property 'password' of object '#<Object>'
  }
  return account.password;
}

export {
  constImmutable,
};
