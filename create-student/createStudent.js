
function createStudent({
  likesJavaScript = true,
  likesES2015 = true,
} = {}) {
  let studentLikings = 'The student ';
  const likes = {
    Both: 'likes JavaScript and ES2015',
    JavaScriptOnly: 'likes JavaScript!',
    ES2015Only: 'likes ES2015!',
    Nothing: 'does not like much...',
  };
  if (likesJavaScript && likesES2015) {
    studentLikings += likes.Both;
  } else if (!likesJavaScript && !likesES2015) {
    studentLikings += likes.Nothing;
  } else if (likesJavaScript) {
    studentLikings += likes.JavaScriptOnly;
  } else if (likesES2015) {
    studentLikings += likes.ES2015Only;
  }
  return studentLikings;
}

export {
  createStudent,
};
