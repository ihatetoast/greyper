const request = require('request');
const cheerio = require('cheerio');


//TODO: functions rewritten after tests. also renamed. 
//apply new fcns here. 
import { getVagaName } from "../../../helpers/helpers";

module.exports = function (app) {


  const subStrings = ["adoption pending", "adopted", "pending adoption", "permanent foster"];

  //VIRGINIA GREYHOUND ADOPTION
  app.get("/api/vaga", function (req, res) {

    request(`http://www.greyhoundpetsorlando.org/available-greys`, function (err, response, html) {
      if (!err && response.statusCode == 200) {
        var $ = cheerio.load(html);

        // ".s_pQyQInlineSkininlineContent div.flex_vbox div div.flex_vbox
        var houndDataVaga = [];
        $(".s_pQyQInlineSkininlineContent div.flex_vbox div.flex_vbox").each(function (i, el) {
          //name is in p with class font_6
          var nameData = $(el).attr("class", 's_usaAWRichTextClickableSkinrichTextContainer').text();
          var name = getVagaName(nameData);
          // var img = $(el).children().data("type", "image")
          var houndMeta = { name };
          console.log(houndMeta);
          houndDataVaga.push(houndMeta);
        });
        res.send(houndDataVaga);
      }
    });

  });

}

