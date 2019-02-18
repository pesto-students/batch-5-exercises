
function rejectPromise() {
  return new Promise(res => res('REJECTED!'));
}

export {
  rejectPromise,
};
