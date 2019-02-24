function limitFunctionCallCount(cb, limit) {
  this.count = this.count + 1 || 0;
  return this.count < limit ? cb : null;
}

export { limitFunctionCallCount };
