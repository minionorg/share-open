function a(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function i(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${a(r)}]`;
  };
}
function u(r, ...t) {
  const o = i("Array");
  if (o(r)) {
    if (t.length === 0)
      return [...r];
    let e = [...r];
    for (const n of t) {
      if (!o(n))
        throw new SyntaxError(`The ${n} must be array in rest`);
      e = [...e, ...n];
    }
    return e;
  } else
    throw new SyntaxError("The ary must be array");
}
export {
  u as default
};
