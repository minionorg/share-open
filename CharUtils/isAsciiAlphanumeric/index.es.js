const i = function(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}, e = function(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${i(t)}]`;
  };
};
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
function s(t) {
  return o(t) || c(t);
}
function u(t) {
  const r = n(t);
  return r >= "0" && r <= "9";
}
function a(t) {
  return s(t) || u(t);
}
export {
  a as default
};