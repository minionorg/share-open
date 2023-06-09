function t(e) {
  return e.replace(/\\u([\d\w]{4})/gi, function(r, n) {
    return String.fromCharCode(parseInt(n, 16));
  });
}
export {
  t as default
};
