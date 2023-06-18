function i(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function e(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${i(t)}]`;
  };
}
function n(t, r) {
  if (!e("string")(t))
    throw new TypeError("The parameter type is string");
  return r !== void 0 && t.length === 0 ? r : t.charAt(0);
}
function o(t) {
  const r = n(t);
  return r >= "A" && r <= "Z";
}
function c(t) {
  const r = n(t);
  return r >= "a" && r <= "z";
}
function p(t) {
  return o(t) || c(t);
}
export {
  p as default
};
