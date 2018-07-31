
//get rid of text that comes up with names:
subStrings = ["adoption pending", "adopted", "pending adoption", "permanent foster"];
const deleteExtraText = function (str, arr) {
  const lcStr = str.toLowerCase();
  let fixed;
  arr.forEach((el) => {
    if (lcStr.match(el)) {
      badStr = el;
      fixed = lcStr.replace(badStr, '').trim();
      return fixed;
    }
  });
  return fixed;
}
module.exports = deleteExtraText;