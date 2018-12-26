exports.seed = function (knex, Promise) {
  return knex('movies').del()
    .then(function () {
      return knex('movies').insert([{
          title: 'WarGames',
          director: 'John Badham',
          year: 1983,
          rating: 3.5,
          poster: 'https://img.moviepostershop.com/war-games-movie-poster-1983-1020468816.jpg'
        },
        {
          title: 'Blackhat',
          director: 'Michael Mann',
          year: 2015,
          rating: 4,
          poster: 'https://m.media-amazon.com/images/M/MV5BMTg1NDUyMzk5NV5BMl5BanBnXkFtZTgwOTk1NzUxMzE@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        {
          title: 'Hackers',
          director: 'Iain Softley',
          year: 1995,
          rating: 2,
          poster: 'https://images-na.ssl-images-amazon.com/images/I/513xTiEgjTL.jpg'
        }
      ])
    })
}