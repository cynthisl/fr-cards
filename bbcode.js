var COLORBLOCK_CHAR = "I";
var COLORBLOCK_FONT = "impact"
var COLORBLOCK_SIZE = 5;
var BREAK = "[br]";
var RULE = "[rule]";

String.prototype.bbBold = function() {
  return ("[b]" + this + "[/b]");
}

String.prototype.bbUnderline = function() {
  return ("[u]" + this + "[/u]");
}
String.prototype.bbItalic = function() {
  return ("[i]" + this + "[/i]");
}

String.prototype.bbCenter = function() {
  return("[center]" + this + "[/center]");
}

String.prototype.bbAddRule = function() {
  return(this+"[rule]");
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

function bbBreaks(arr) {
  var str = "";
  for(i=0; i<arr.length; i++) {
    str += arr[i];
    str += BREAK;
  }
  return str;
}

String.prototype.bbAddFont = function(font) {
  return ("[font="+font+"]"+this+"[/font]");
}
String.prototype.bbAddColor = function(color) {
  return ("[color="+color+"]"+this+"[/color]");
}
String.prototype.bbSetSize = function(size) {
  return ("[size="+size+"]"+this+"[/size]");
}
String.prototype.bbImg = function() {
  return ("[img]"+this+"[/img]");
}


function bbColorBlock(colors) {
  var str = "";
  for(i=0; i<colors.length; i++) {
    str += COLORBLOCK_CHAR.bbAddColor(colors[i]);
  }
  str = str.bbAddFont(COLORBLOCK_FONT).bbSetSize(COLORBLOCK_SIZE);
  return str;
}

function bbLinkToSmall(l) {
  var re = /(rendern\/)(350)(\/\d+\/\d+)(_350)(\.png)/;
  return l.replace(re, "$1avatars$3$5");
}