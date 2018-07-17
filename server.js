const request = require('request');
const cheerio = require('cheerio');

//GALT: GREYHOUND ADOPTION LEAGUE OF TEXAS
/*
deal with empty name strings and "adoption pending"
*/

request(`http://galtx.org/hounds/available.shtml`, function (err, response, htmlData) {

  var $ = cheerio.load(htmlData);

  var houndData = [];

  $("ul.media-grid li").each(function (i, el) {
    var name = $(el).text().trim();
    var nameUrl = $(el).text().trim().toLowerCase();
    var a = $(el).children().attr("href");
    var link = `http://galtx.org/hounds/${a}`;
    var img = `http://galtx.org/images/hounds/${nameUrl}_thm.jpg`
    houndData.push({ name, link, img })

  });
  console.log(houndData);
});
