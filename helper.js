//const junkyName = 'YUKONAdoption Pending';
//const allCAPS = 'UNO';

function initCap(str) {
  const firstInit = str.slice(0, 1).toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return firstInit + rest;
}
module.exports = function (str) {
  const lc = str.toLowerCase();
  const subStr1 = "adoption pending";
  const subStr2 = "adopted";
  if (lc.match(subStr1)) {
    //console.log("name needs fixing");
    const fixed = lc.replace(subStr1, '');
    return initCap(fixed);
  } else if (lc.match(subStr2)) {
    //console.log("name needs fixing");
    const fixed = lc.replace(subStr2, '');
    return initCap(fixed);
  }
  else {
    //console.log("clean: " + str);
    return initCap(lc);
  }
}
