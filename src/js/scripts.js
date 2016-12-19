(function ($, window, document, undefined) {

  'use strict';

  $(function () {    
  });

  var letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      item = [],
      heroName = [],
      heroId = [],
      heroImage = [],
      heroFullData = [],
      heroObj = [];  

  for (var i = 0; i < letter.length; i++) {
    // Pega dados dos personagens ordenando por inicial do nome
    $.ajax({
      url: 'http://gateway.marvel.com/v1/public/characters?nameStartsWith=' + letter[i] + '&orderBy=name&limit=20&ts=1&apikey=90d027904656dc9f5fe5557017416c58&hash=1aaae47b6adac4fb7ef52a814e46144d', 
      dataType: 'jsonp',
      cache: true,
      ifModified: true,
      headers: {
        'Cache-Control': 'max-age=200' 
      },      
      success: function(data) {

        item = data.data.results;
        var entry = item[Math.floor(Math.random()*item.length)];

        for (var j = 0; j < item.length; j++) {
          heroName = entry.name;
          heroId = entry.id;
          heroImage = entry.thumbnail.path + '.' + entry.thumbnail.extension;

          heroFullData = {
            heroId: heroId,
            heroName:  heroName,
            heroImage: heroImage
          };
        }

        heroObj = heroFullData;
        console.log(heroObj.heroName);

        var template = $('#item-template').html();
        var html = Mustache.to_html(template, heroObj);
        $('#sampleArea').append(html);
    }});
  }

})(jQuery, window, document);
//
