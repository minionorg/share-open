const e = function(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}, n = function(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${e(t)}]`;
  };
};
function i(t, r) {
  if (!n("string")(t))
    throw new TypeError("The parameter type is string");
  return r !== void 0 && t.length === 0 ? r : t.charAt(0);
}
function s(t) {
  const r = i(t);
  return r === " " || r === `
` || r === "\r" || r === "	" || r === "\f";
}
export {
  s as default
};
