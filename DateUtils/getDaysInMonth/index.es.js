const t = function(e) {
  return new Date(e.getFullYear(), 2, 0).getDate() === 29;
}, a = function(e) {
  switch (e.getMonth()) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;
    case 1:
      return t(e) ? 29 : 28;
    default:
      return 30;
  }
};
export {
  a as default
};
