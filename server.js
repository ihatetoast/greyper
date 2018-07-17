const request = require('request');
const cheerio = require('cheerio');

const nameFix = require('./helper.js');
const boop = nameFix("KATYAdoption pending");
console.log("boop: " + boop);
//GALT: GREYHOUND ADOPTION LEAGUE OF TEXAS

request(`http://galtx.org/hounds/available.shtml`, function (err, response, html) {
  if (!err && response.statusCode == 200) {
    //console.log(html); //returns whole damn page
    //the goods:
    var $ = cheerio.load(html);
    var houndData = [];
    $("ul.media-grid li").each(function (i, el) {
      var nameData = $(el).text().trim();
      var name = nameFix(nameData);
      var nameUrl = name.toLowerCase();
      var a = $(el).children().attr("href");
      var link = `http://galtx.org/hounds/${a}`;
      var img = `http://galtx.org/images/hounds/${nameUrl}_thm.jpg`;
      var houndMeta = { name, link, img };
      houndData.push(houndMeta)

    });
    console.log(houndData);

  }

});
