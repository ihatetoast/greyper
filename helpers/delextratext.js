
//get rid of text that comes up with names:
subStrings = ["adoption pending", "adopted", "pending adoption", "permanent foster"];
const deleteExtraText = function (str, arr) {
  const lcStr = str.toLowerCase();
  let fixed = lcStr;
  arr.forEach((el) => {
    if (lcStr.match(el)) {
      const badStr = el;
      fixed = lcStr.replace(badStr, '').trim();
      return;
    }
  });
  return fixed;
}
module.exports = deleteExtraText;