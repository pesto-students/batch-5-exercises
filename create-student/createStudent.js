
function createStudent(obj) {
  if (typeof obj == 'undefined') {
    return 'The student likes JavaScript and ES2015';
  }
  else if (obj.hasOwnProperty('likesES2015') && obj.hasOwnProperty('likesJavaScript')) {
    return 'The student does not like much...';
  }
  else if (obj.hasOwnProperty('likesES2015')) {
    return 'The student likes JavaScript!';
  }
  else {
    return 'The student likes ES2015!';
  }
}

export {
  createStudent,
};
