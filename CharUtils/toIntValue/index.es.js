const n = function(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}, e = function(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${n(r)}]`;
  };
};
function i(r, t) {
  if (!e("string")(r))
    throw new TypeError("The parameter type is string");
  return t !== void 0 && r.length === 0 ? t : r.charAt(0);
}
function o(r) {
  const t = i(r);
  return t >= "0" && t <= "9";
}
function s(r, t) {
  if (!o(r)) {
    if (t !== void 0)
      return t;
    throw new RangeError("The character " + r + " is not in the range '0' - '9'");
  }
  return r.charCodeAt(0) - 48;
}
export {
  s as default
};
