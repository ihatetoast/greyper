const request = require('request');
const cheerio = require('cheerio');



//GALT: GREYHOUND ADOPTION LEAGUE OF TEXAS
/*
deal with empty name strings and "adoption pending"
*/
request(`http://galtx.org/hounds/available.shtml`, function (err, response, html) {
  if (!err && response.statusCode == 200) {
    //whole damn page
    console.log(html);
    //the goods:
    var $ = cheerio.load(html);
    var houndData = [];
    $("ul.media-grid li").each(function (i, el) {
      var name = $(el).text().trim();
      var nameUrl = $(el).text().trim().toLowerCase();
      var a = $(el).children().attr("href");
      var link = `http://galtx.org/hounds/${a}`;
      var img = `http://galtx.org/images/hounds/${nameUrl}_thm.jpg`;
      var houndMeta = { name, link, img };
      houndData.push(houndMeta)

    });
    console.log(houndData);

  }

});
