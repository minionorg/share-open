function n(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function o(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${n(e)}]`;
  };
}
function u(e, r, t) {
  if (!o("Array")(e))
    throw new TypeError("The list must be array");
  if (t === void 0)
    e.push(r);
  else if (o("Number")(t))
    e.splice(t, 0, r);
  else
    throw new TypeError("The index must be number");
  return e;
}
export {
  u as default
};
