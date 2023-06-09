const s = function(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}, n = function(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${s(e)}]`;
  };
};
function u(e, r, t) {
  if (!n("Array")(e))
    throw new TypeError("The list must be array");
  const o = [...e];
  if (t === void 0)
    o.push(r);
  else if (n("Number")(t))
    o.splice(t, 0, r);
  else
    throw new TypeError("The index must be number");
  return o;
}
export {
  u as default
};
