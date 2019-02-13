function bouncer(list) {
  var truthyList = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i]) {
      truthyList.push(list[i]);
    }
  }
  return truthyList;
}

export { bouncer };
