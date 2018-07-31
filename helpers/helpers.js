//All helpers here. sep files for testing.
// export function yoYoMa() {
//   return "Boutros Boutros-Gali.";
// }
// get rid of accents for names like Zöe/Chlöe or Renée ...
export function removeAccentsStr() {
  return str
    .replace(/Â|À|Å|Ã|Ä/g, "A")
    .replace(/â|à|å|ã|ä/g, "a")
    .replace(/É|Ê|È|Ë/g, "E")
    .replace(/é|ê|è|ë/g, "e")
    .replace(/Ó|Ô|Ò|Õ|Ø|Ö/g, "O")
    .replace(/ó|ô|ò|õ|ö/g, "o")
    .replace(/Ú|Û|Ù|Ü/g, "U")
    .replace(/ú|û|ù|ü/g, "u");
}

export function initCap(str) {
  const firstInit = str.slice(0, 1).toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return firstInit + rest;
}
export function slugify(text) {
  return text.toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

//get rid of text that comes up with names:

export function deleteExtraText(str, arr) {
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

