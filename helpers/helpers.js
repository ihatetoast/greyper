//All helpers here. sep files for testing.
export function yoYoMa() {
  return 'Boutros Boutros-Gali.';
}
// get rid of accents for names like Zöe/Chlöe or Renée ...
//TODO: combine remove accents with slugify. make fewer fcns
//but make sure each fcn does one thing.
// export function removeAccentsStr(str) {
//   return str
//     .replace(/Â|À|Å|Ã|Ä/g, "A")
//     .replace(/â|à|å|ã|ä/g, "a")
//     .replace(/É|Ê|È|Ë/g, "E")
//     .replace(/é|ê|è|ë/g, "e")
//     .replace(/Ó|Ô|Ò|Õ|Ø|Ö/g, "O")
//     .replace(/ó|ô|ò|õ|ö/g, "o")
//     .replace(/Ú|Û|Ù|Ü/g, "U")
//     .replace(/ú|û|ù|ü/g, "u");
// }

export function initCap(str) {
  const firstInit = str.slice(0, 1).toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return firstInit + rest;
}
export function slugify(text) {
  return text
    .toLowerCase()
    .replace('.shtml', '')
    .replace(/Â|À|Å|Ã|Ä/g, 'A')
    .replace(/â|à|å|ã|ä/g, 'a')
    .replace(/É|Ê|È|Ë/g, 'E')
    .replace(/é|ê|è|ë/g, 'e')
    .replace(/Ó|Ô|Ò|Õ|Ø|Ö/g, 'O')
    .replace(/ó|ô|ò|õ|ö/g, 'o')
    .replace(/Ú|Û|Ù|Ü/g, 'U')
    .replace(/ú|û|ù|ü/g, 'u')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

//get rid of text that comes up with names:

export function deleteExtraText(str, arr) {
  const lcStr = str.toLowerCase();
  let fixed = lcStr;
  arr.forEach(el => {
    if (lcStr.match(el)) {
      const badStr = el;
      fixed = lcStr.replace(badStr, '').trim();
      return;
    }
  });
  return fixed;
}

//VAGA
//there are three places that contain the name
export function getVagaName(str) {
  let noJunkName = str;
  if (noJunkName.length < 1) {
    noJunkName = '';
  } else if (noJunkName.slice(0, 3) === 'DOB') {
    noJunkName = '';
  } else if (noJunkName.slice(0, 9) === 'Sponsored') {
    noJunkName = '';
  } else if (noJunkName.slice(0, 10) === 'Click Here') {
    noJunkName = '';
  } else if (noJunkName.length > 1) {
    let nameArr = noJunkName.split('"');
    noJunkName = nameArr[1];
  } else {
    return noJunkName;
  }
  return noJunkName;
}
