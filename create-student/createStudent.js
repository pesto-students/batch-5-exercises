
function createStudent(sampleObject) {
  if (typeof sampleObject === 'undefined') {
    return 'The student likes JavaScript and ES2015';
  } else if (sampleObject.likesES2015 === false && sampleObject.likesJavaScript === false) {
    return 'The student does not like much...';
  } else if (sampleObject.likesES2015 === false) {
    return 'The student likes JavaScript!';
  }
  return 'The student likes ES2015!';
}

export {
  createStudent,
};
