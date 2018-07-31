const request = require('request');
const cheerio = require('cheerio');


//TODO: functions rewritten after tests. also renamed. 
//apply new fcns here. 
import { yoYoMa, initCap, deleteExtraText, slugify } from "../../helpers/helpers";

module.exports = function (app) {


  app.get("/api", function (request, response) {
    response.send("I am scrapin', toots.")
    console.log(yoYoMa());
  });

  const subStrings = ["adoption pending", "adopted", "pending adoption", "permanent foster"];

  //GALT: GREYHOUND ADOPTION LEAGUE OF TEXAS

  app.get("/api/galt", function (req, res) {

    request(`http://galtx.org/hounds/available.shtml`, function (err, response, html) {
      if (!err && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var houndDataGalt = [];
        $("ul.media-grid li").each(function (i, el) {
          var nameData = $(el).text().trim();
          var fixedName = deleteExtraText(nameData, subStrings);
          var name = initCap(fixedName) || "Cheyenne";
          var a = $(el).children().attr("href");
          var slug = slugify(a);
          var link = `http://galtx.org/hounds/${a}`;
          var img = `http://galtx.org/images/hounds/${slug}_thm.jpg`;
          var houndMeta = { name, link, img };
          houndDataGalt.push(houndMeta)
        });
        res.send(houndDataGalt);
      }
    });

  });

  //GALT-CENTEX: GREYHOUND ADOPTION LEAGUE OF TEXAS CENTRAL TEXAS 
  app.get("/api/centex", function (req, res) {
    // res.send("greyhound adoption league of texas CENTRAL TEXAS");
    request(`https://galtx-centex.org/greyhounds/`, function (err, response, html) {
      if (!err && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var houndDataCenTex = [];
        $("a.thumbnail").each(function (i, el) {
          var nameData = $(el).text().trim();
          var fixedName = deleteExtraText(nameData, subStrings);
          var name = initCap(fixedName);
          var nameUrl = slugify(fixedName);
          var link = `https://galtx-centex.org/greyhounds/${nameUrl}`;
          var img = `https://galtx-centex.org/img/thm/${nameUrl}.jpg`;
          var houndMeta = { name, link, img };
          houndDataCenTex.push(houndMeta)
        });
        res.send(houndDataCenTex);
      }
    });
  });

}

