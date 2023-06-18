function s(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function o(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${s(e)}]`;
  };
}
function i(e, r, t) {
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
function f(e, ...r) {
  const t = o("Array");
  if (t(e)) {
    if (r.length === 0)
      return [...e];
    let n = [...e];
    for (const u of r) {
      if (!t(u))
        throw new SyntaxError(`The ${u} must be array in rest`);
      n = [...n, ...u];
    }
    return n;
  } else
    throw new SyntaxError("The ary must be array");
}
function l(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${s(e)}]`;
  };
}
l("Function");
l("Object");
function h(e) {
  if (e === null)
    return null;
  if (!o("Array")(e))
    throw new TypeError("The ary must be array");
  return [...e];
}
function c(e, r) {
  if (!o("Array")(e))
    throw new TypeError("The list must be array");
  if (e.length === 0)
    return e;
  if (r === void 0)
    throw new SyntaxError("The index must be required");
  if (o("Number")(r))
    r < 0 ? r = 0 : r >= e.length ? r = e.length - 1 : r = Math.floor(r);
  else
    throw new TypeError("The index must be number");
  return e.splice(r, 1), e;
}
function w(e, r, t) {
  if (!o("Array")(e))
    throw new TypeError("The list must be array");
  const n = [...e];
  if (t === void 0)
    n.push(r);
  else if (o("Number")(t))
    n.splice(t, 0, r);
  else
    throw new TypeError("The index must be number");
  return n;
}
function b(e, r) {
  if (!o("Array")(e))
    throw new TypeError("The list must be array");
  const t = [...e];
  if (t.length === 0)
    return t;
  if (r === void 0)
    throw new SyntaxError("The index must be required");
  if (o("Number")(r))
    r < 0 ? r = 0 : r >= t.length ? r = t.length - 1 : r = Math.floor(r);
  else
    throw new TypeError("The index must be number");
  return t.splice(r, 1), t;
}
const p = {
  add: i,
  addAll: f,
  clone: h,
  remove: c,
  toAdded: w,
  toRemoved: b
};
export {
  i as add,
  f as addAll,
  h as clone,
  p as default,
  c as remove,
  w as toAdded,
  b as toRemoved
};
