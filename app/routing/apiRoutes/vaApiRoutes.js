const request = require('request');
const cheerio = require('cheerio');

//TODO: functions rewritten after tests. also renamed.
//apply new fcns here.
//vaga gets hounds from orlando. when i get to florida, deal with the duplicate
import { getVagaName } from '../../../helpers/helpers';

module.exports = function(app) {
  const subStrings = [
    'adoption pending',
    'adopted',
    'pending adoption',
    'permanent foster'
  ];

  //VIRGINIA GREYHOUND ADOPTION
  app.get('/api/vaga', function(req, res) {
    request(`http://www.greyhoundpetsorlando.org/available-greys`, function(
      err,
      response,
      html
    ) {
      if (!err && response.statusCode == 200) {
        var $ = cheerio.load(html);

        // ".s_pQyQInlineSkininlineContent div.flex_vbox div div.flex_vbox
        var houndDataVaga = [];
        $('.s_pQyQInlineSkininlineContent div.flex_vbox div.flex_vbox').each(
          function(i, el) {
            //name is in p with class font_6
            var nameData = $(el)
              .attr('class', 's_usaAWRichTextClickableSkinrichTextContainer')
              .text();
            var name = getVagaName(nameData);
            var link = 'http://www.greyhoundpetsorlando.org/available-greys';
            var img = $('.wp1link')
              .children()
              .html();
            var houndMeta = { name, link, img };
            console.log(houndMeta);
            houndDataVaga.push(houndMeta);
          }
        );
        res.send(houndDataVaga);
      }
    });
  });
  //OLD DOMINION gets hounds from alabama.
  //alabama groups separates by males and females because everyone hates me.
  app.get('/api/odga-males', function(req, res) {
    request(`http://www.ohmygreyhounds.com/adoptable-males.html`, function(
      err,
      response,
      html
    ) {
      if (!err && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var houndDataOdgaM = [];
        $('.wsite-section-elements').each(function(i, el) {
          var nameData = $(el)
            .find('.wsite-content-title')
            .text();
          var imgTextTail = $('.wsite-image a img').attr('src');
          var img = `http://www.ohmygreyhounds.com${imgTextTail}`;
          var link = 'http://www.ohmygreyhounds.com/adoptable-males.html';
          var houndMeta = { nameData, img, link };
          // console.log($('.wsite-image a img').attr('src'));
          houndDataOdgaM.push(houndMeta);
        });
        res.send(houndDataOdgaM);
      }
    });
  });
};
