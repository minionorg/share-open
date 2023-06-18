const n = "[\\u2700-\\u27BF]", u = "[\\uE000-\\uF8FF]", e = "\\uD83C[\\uDC00-\\uDFFF]", o = "\\uD83D[\\uDC00-\\uDFFF]", t = "[\\u2011-\\u26FF]", F = "\\uD83E[\\uDD10-\\uDDFF]";
function D(s) {
  return RegExp(
    `(${n}|${u}|${e}|${o}|${t}|${F})`,
    "g"
  ).test(s);
}
export {
  D as default
};
