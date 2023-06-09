const s = function(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}, o = function(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${s(r)}]`;
  };
};
function l(r, e, t) {
  if (!o("Array")(r))
    throw new TypeError("The list must be array");
  const n = [...r];
  if (t === void 0)
    n.push(e);
  else if (o("Number")(t))
    n.splice(t, 0, e);
  else
    throw new TypeError("The index must be number");
  return n;
}
function c(r, ...e) {
  const t = o("Array");
  if (t(r)) {
    if (e.length === 0)
      return [...r];
    let n = [...r];
    for (const u of e) {
      if (!t(u))
        throw new SyntaxError(`The ${u} must be array in rest`);
      n = [...n, ...u];
    }
    return n;
  } else
    throw new SyntaxError("The ary must be array");
}
const i = function(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${s(r)}]`;
  };
};
i("Function");
i("Object");
function f(r) {
  if (r === null)
    return null;
  if (!o("Array")(r))
    throw new TypeError("The ary must be array");
  return [...r];
}
function a(r, e) {
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
const h = {
  add: l,
  addAll: c,
  clone: f,
  remove: a
};
export {
  l as add,
  c as addAll,
  f as clone,
  h as default,
  a as remove
};
