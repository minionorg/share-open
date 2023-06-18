function e(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function n(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${e(t)}]`;
  };
}
function o(t, r) {
  if (!n("string")(t))
    throw new TypeError("The parameter type is string");
  return r !== void 0 && t.length === 0 ? r : t.charAt(0);
}
export {
  o as default
};
