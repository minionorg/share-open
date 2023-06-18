function o(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function r(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${o(e)}]`;
  };
}
function n(e, t) {
  if (!r("Array")(e))
    throw new TypeError("The list must be array");
  if (e.length === 0)
    return e;
  if (t === void 0)
    throw new SyntaxError("The index must be required");
  if (r("Number")(t))
    t < 0 ? t = 0 : t >= e.length ? t = e.length - 1 : t = Math.floor(t);
  else
    throw new TypeError("The index must be number");
  return e.splice(t, 1), e;
}
export {
  n as default
};
