function r(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function n(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${r(t)}]`;
  };
}
export {
  n as default
};
