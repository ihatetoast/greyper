//from wes bos's tutes
const slugify = function (text) {
  return text.toLowerCase()
    .replace('.shtml', '')
    .replace(/Â|À|Å|Ã|Ä/g, "A")
    .replace(/â|à|å|ã|ä/g, "a")
    .replace(/É|Ê|È|Ë/g, "E")
    .replace(/é|ê|è|ë/g, "e")
    .replace(/Ó|Ô|Ò|Õ|Ø|Ö/g, "O")
    .replace(/ó|ô|ò|õ|ö/g, "o")
    .replace(/Ú|Û|Ù|Ü/g, "U")
    .replace(/ú|û|ù|ü/g, "u")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
    ;
}

module.exports = slugify;