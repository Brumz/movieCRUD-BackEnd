exports.seed = function (knex, Promise) {
  return knex('movies').del()
    .then(function () {
      return knex('movies').insert([{
          title: 'WarGames',
          director: 'John Badham',
          year: 1938,
          rating: 3.5,
          poster: 'https://en.wikipedia.org/wiki/WarGames#/media/File:Wargames.jpg'
        },
        {
          title: 'Blackhat',
          director: 'Michael Mann',
          year: 2015,
          rating: 4,
          poster: 'https://en.wikipedia.org/wiki/Blackhat_(film)#/media/File:Blackhat_poster.jpg'
        },
        {
          title: 'Hackers',
          director: 'Iain Softley',
          year: 1995,
          rating: 2,
          poster: 'https://en.wikipedia.org/wiki/Hackers_(film)#/media/File:Hackersposter.jpg'
        }
      ]);
    });
};