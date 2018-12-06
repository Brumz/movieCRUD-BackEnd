const db = require('./database-connection')

module.exports = {
    listAllMovies() {
        return db('movies')
    },
    listMovieById(id) {
        return db('movies').where('id', id).first()
    },


}