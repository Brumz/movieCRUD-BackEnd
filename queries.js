const db = require('./database-connection')

module.exports = {
    listAllMovies() {
        return db('movies')
    },
    listMovieById(id) {
        return db('movies').where('id', id).first()
    },
    createMovie(newMovie) {
        return db('movies').insert(newMovie).returning('*')
    },
    updateMovie(id, newInfo) {
        return db('movies').where('id', id).update(newInfo).returning('*')
    },
    deleteMovie(id) {
        return db('movies').where('id', id).del()
    }
}