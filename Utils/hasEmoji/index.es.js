const n = "[\\u2700-\\u27BF]", u = "[\\uE000-\\uF8FF]", o = "\\uD83C[\\uDC00-\\uDFFF]", e = "\\uD83D[\\uDC00-\\uDFFF]", t = "[\\u2011-\\u26FF]", F = "\\uD83E[\\uDD10-\\uDDFF]", D = function(s) {
  return RegExp(
    `(${n}|${u}|${o}|${e}|${t}|${F})`,
    "g"
  ).test(s);
};
export {
  D as default
};
