
function createStudent(options) {
  let studentLikings = 'The student ';
  const likes = {
    Both: 'likes JavaScript and ES2015',
    JavaScriptOnly: 'likes JavaScript! ',
    ES2015Only: 'likes ES2015! ',
    Nothing: 'does not like much...',
  };
  if (options === undefined) {
    const result = studentLikings + likes.Both;
    return result;
  }
  const { likesJavaScript, likesES2015 } = options;
  const studentLikesBoth = (likesJavaScript === undefined || likesJavaScript)
    && (likesES2015 === undefined || likesES2015);
  const studentLikeNothing = (!likesJavaScript && likesJavaScript !== undefined)
    && (!likesES2015 && likesES2015 !== undefined);
  const likeOnlyJs = (likesJavaScript);
  if (studentLikesBoth) {
    studentLikings += likes.Both;
  } else if (studentLikeNothing) {
    studentLikings += likes.Nothing;
  } else if (likeOnlyJs) {
    studentLikings += likes.JavaScriptOnly;
  } else if (likesES2015) {
    studentLikings += likes.ES2015Only;
  }
  return studentLikings;
}

export {
  createStudent,
};
