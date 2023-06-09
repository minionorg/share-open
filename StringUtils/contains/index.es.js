const c = function(f, i, n) {
  return n ? (n + f + n).indexOf(n + i + n) > -1 : f.indexOf(i) > -1;
};
export {
  c as default
};
