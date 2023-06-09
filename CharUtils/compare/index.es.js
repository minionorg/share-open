const i = function(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}, c = function(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${i(t)}]`;
  };
};
function o(t, r) {
  if (!c("string")(t))
    throw new TypeError("The parameter type is string");
  return r !== void 0 && t.length === 0 ? r : t.charAt(0);
}
function a(t, r) {
  const e = o(t), n = o(r);
  return Number.isNaN(e.charCodeAt(0)) && Number.isNaN(n.charCodeAt(0)) ? 0 : e.charCodeAt(0) - n.charCodeAt(0);
}
export {
  a as default
};
