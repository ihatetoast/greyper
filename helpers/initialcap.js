//helper fcn


var initCap = function (str) {
  const firstInit = str.slice(0, 1).toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return firstInit + rest;
}

module.exports = initCap;