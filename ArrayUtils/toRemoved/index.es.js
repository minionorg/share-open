function n(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function o(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${n(r)}]`;
  };
}
function u(r, e) {
  if (!o("Array")(r))
    throw new TypeError("The list must be array");
  const t = [...r];
  if (t.length === 0)
    return t;
  if (e === void 0)
    throw new SyntaxError("The index must be required");
  if (o("Number")(e))
    e < 0 ? e = 0 : e >= t.length ? e = t.length - 1 : e = Math.floor(e);
  else
    throw new TypeError("The index must be number");
  return t.splice(e, 1), t;
}
export {
  u as default
};
