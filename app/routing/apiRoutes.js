const request = require('request');
const cheerio = require('cheerio');


//TODO: functions rewritten after tests. also renamed. 
//apply new fcns here. 
import { yoYoMa, initCap, slugify, deleteExtraText } from "../../helpers/helpers";

module.exports = function (app) {

  // app.get("/api", function (req, res) {
  //   res.send("I am scrapin', toots.")
  //   console.log(yoYoMa());
  // });

  //GALT: GREYHOUND ADOPTION LEAGUE OF TEXAS
  const galtSubStrings = ["adoption pending", "adopted", "pending adoption", "permanent foster"];
  app.get("/api/galt", function (req, res) {

    // res.send("greyhound adoption league of texas");

    request(`http://galtx.org/hounds/available.shtml`, function (err, response, html) {
      if (!err && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var houndData = [];
        $("ul.media-grid li").each(function (i, el) {
          var nameData = $(el).text().trim();
          var fixedName = deleteExtraText(nameData, galtSubStrings);
          var name = initCap(fixedName) || "Cheyenne"
          var a = $(el).children().attr("href");
          var link = `http://galtx.org/hounds/${a}`;
          var img = `http://galtx.org/images/hounds/${name}_thm.jpg`;
          var houndMeta = { name, link, img };
          houndData.push(houndMeta)
        });
        res.send(houndData);
      }
    });

  });

  //GALT-CENTEX: GREYHOUND ADOPTION LEAGUE OF TEXAS CENTRAL TEXAS 
  app.get("/api/centex", function (req, res) {
    request(`https://galtx-centex.org/greyhounds/`, function (err, response, html) {
      if (!err && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var houndData = [];
        $("a.thumbnail").each(function (i, el) {
          var nameData = $(el).text().trim();
          var name = nameFix(nameData);
          var nameUrl = name.toLowerCase();
          var link = `https://galtx-centex.org/greyhounds/${nameUrl}`;
          var img = `https://galtx-centex.org/img/thm/${nameUrl}.jpg`;
          var houndMeta = { name, link, img };
          houndData.push(houndMeta)
        });
        res.send(houndData);
      }
    });
  });

}

