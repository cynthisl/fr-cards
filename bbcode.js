function bbBold(str) {
  return ("[b]" + str + "[/b]");
}

function bbUnderline(str) {
  return ("[u]" + str + "[/u]");
}

function bbColumns(arr) {
  // input: array of strings, each string is new column
  var str = "[columns]";
  str += arr[0];
  for(i=1; i<arr.length; i++) {
    str += "[nextcol]";
    str += arr[i];
  }
  str += "[/columns]";
  return str;
}
