(function () {
  const isLoggedIn = localStorage.getItem('logged-in');
  return Boolean(isLoggedIn);
})()