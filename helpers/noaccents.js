// get rid of accents for names like Zöe/Chlöe or Renée ...
const removeAccents = function (str) {
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

module.exports = removeAccents;