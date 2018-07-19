const request = require('request');
const cheerio = require('cheerio');
const nameFix = require('../../helper.js');

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.send("I'm scrapin'.");
  });

  //GALT: GREYHOUND ADOPTION LEAGUE OF TEXAS
  app.get("/galt", function (req, res) {
    // res.send("greyhound adoption league of texas");

    request(`http://galtx.org/hounds/available.shtml`, function (err, response, html) {
      if (!err && response.statusCode == 200) {
        //console.log(html); //returns whole damn page
        //the goods:
        var $ = cheerio.load(html);
        // res.send(html);
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
        res.send(houndData);
      }
    });
  });

}

