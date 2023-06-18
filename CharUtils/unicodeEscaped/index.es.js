function e(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function o(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${e(t)}]`;
  };
}
function i(t, r) {
  if (!o("string")(t))
    throw new TypeError("The parameter type is string");
  return r !== void 0 && t.length === 0 ? r : t.charAt(0);
}
const n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
function a(t) {
  const r = i(t).charCodeAt(0);
  return "\\u" + n[r >> 12 & 15] + n[r >> 8 & 15] + n[r >> 4 & 15] + n[r & 15];
}
export {
  a as default
};
