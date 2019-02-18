
function templateLiterals(names) {
  return `There are ${names.length} people on the football team. Their names are ${names.join(', ')}.`;
}

export {
  templateLiterals,
};
