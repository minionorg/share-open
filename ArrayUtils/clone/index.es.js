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
function o(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${e(t)}]`;
  };
}
n("Function");
n("Object");
function u(t) {
  if (t === null)
    return null;
  if (!o("Array")(t))
    throw new TypeError("The ary must be array");
  return [...t];
}
export {
  u as default
};
