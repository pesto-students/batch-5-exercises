
function createStudent({ likesES2015 = true, likesJavaScript = true } = {}) {
  let message = 'The student ';
  if (likesES2015 && likesJavaScript) {
    message += 'likes JavaScript and ES2015';
  } else if (likesES2015) {
    message += 'likes ES2015!';
  } else if (likesJavaScript) {
    message += 'likes JavaScript!';
  } else {
    message += 'does not like much...';
  }
  return message;
}

export {
  createStudent,
};
