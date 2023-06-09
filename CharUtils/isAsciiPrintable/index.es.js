const n = function(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}, e = function(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${n(t)}]`;
  };
};
function i(t, r) {
  if (!e("string")(t))
    throw new TypeError("The parameter type is string");
  return r !== void 0 && t.length === 0 ? r : t.charAt(0);
}
function c(t) {
  const r = i(t);
  return (r >= " " || r.charCodeAt(0) >= 32) && r.charCodeAt(0) < 127;
}
export {
  c as default
};
