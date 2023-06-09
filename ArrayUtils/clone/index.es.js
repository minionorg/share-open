const n = function(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}, e = function(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${n(t)}]`;
  };
};
e("Function");
e("Object");
const o = function(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${n(t)}]`;
  };
};
function c(t) {
  if (t === null)
    return null;
  if (!o("Array")(t))
    throw new TypeError("The ary must be array");
  return [...t];
}
export {
  c as default
};
