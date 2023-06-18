function i(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function a(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${i(r)}]`;
  };
}
function o(r, t) {
  if (!a("string")(r))
    throw new TypeError("The parameter type is string");
  return t !== void 0 && r.length === 0 ? t : r.charAt(0);
}
function c(r, t) {
  const e = o(r), n = o(t);
  return Number.isNaN(e.charCodeAt(0)) && Number.isNaN(n.charCodeAt(0)) ? 0 : e.charCodeAt(0) - n.charCodeAt(0);
}
export {
  c as default
};
