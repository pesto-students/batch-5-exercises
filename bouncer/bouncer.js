function bouncer(...args) {
  return args.filter((item) => {
    return item !== false && item !== '' && item != null && item != NaN && item != undefined && item !== 0
  });
}

export {
  bouncer,
};