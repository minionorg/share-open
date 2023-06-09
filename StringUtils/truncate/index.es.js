function t(e, n, r) {
  if (n < 0)
    throw new RangeError("offset cannot be negative");
  if (r < 0)
    throw new RangeError("maxWith cannot be negative");
  if (e === null)
    return null;
  if (n > e.length)
    return "";
  if (e.length > r) {
    const l = Math.min(n + r, e.length);
    return e.substring(n, l);
  } else
    return e.substring(n);
}
export {
  t as default
};
