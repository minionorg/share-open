function i(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function e(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${i(r)}]`;
  };
}
function n(r, t) {
  if (!e("string")(r))
    throw new TypeError("The parameter type is string");
  return t !== void 0 && r.length === 0 ? t : r.charAt(0);
}
function o(r) {
  const t = n(r);
  return t >= "A" && t <= "Z";
}
function c(r) {
  const t = n(r);
  return t >= "a" && t <= "z";
}
function s(r) {
  return o(r) || c(r);
}
function u(r) {
  const t = n(r);
  return t >= "0" && t <= "9";
}
function a(r) {
  return s(r) || u(r);
}
export {
  a as default
};
