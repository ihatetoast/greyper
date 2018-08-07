const request = require('request');
const cheerio = require('cheerio');

//TODO: functions rewritten after tests. also renamed.
//apply new fcns here.
//vaga gets hounds from orlando. when i get to florida, deal with the duplicate
//HELPER FCNS NEEDED
// DEALING WITH EMPTY FIELDS ... AFTER VA IS DONE
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
            var houndMeta = {
              name,
              link,
              img
            };
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
  //http://www.ohmygreyhounds.com/adoptable-females.html
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
          var houndMeta = {
            nameData,
            img,
            link
          };
          // console.log($('.wsite-image a img').attr('src'));
          houndDataOdgaM.push(houndMeta);
        });
        res.send(houndDataOdgaM);
      }
    });
  });
  app.get('/api/odga-females', function(req, res) {
    request(`http://www.ohmygreyhounds.com/adoptable-females.html`, function(
      err,
      response,
      html
    ) {
      if (!err && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var houndDataOdgaF = [];
        $('.wsite-section-elements').each(function(i, el) {
          var nameData = $(el)
            .find('.wsite-content-title')
            .text();
          var imgTextTail = $('.wsite-image a img').attr('src');
          var img = `http://www.ohmygreyhounds.com${imgTextTail}`;
          var link = 'http://www.ohmygreyhounds.com/adoptable-females.html';
          var houndMeta = {
            nameData,
            img,
            link
          };
          // console.log($('.wsite-image a img').attr('src'));
          houndDataOdgaF.push(houndMeta);
        });
        res.send(houndDataOdgaF);
      }
    });
  });

  //GREYHOUND WELFARE, INC
  app.get('/api/gwi', function(req, res) {
    request(`http://greyhoundwelfare.org/category/adoptable-dogs/`, function(
      err,
      response,
      html
    ) {
      if (!err && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var houndDataGreyWelfare = [];
        $('article.category-adoptable-dogs').each(function(i, el) {
          var nameData = $(el)
            .children()
            .find('.entry-title')
            .text();
          var link = $(el)
            .find('a')
            .attr('href');
          var img = $(el)
            .find('img')
            .attr('src');
          console.log(img);
          var houndMeta = { nameData, link, img };
          // console.log($('.wsite-image a img').attr('src'));
          houndDataGreyWelfare.push(houndMeta);
        });
        res.send(houndDataGreyWelfare);
      }
    });
  });
};
