const db = require('./database-connection')

module.exports = {
    listAllMovies() {
        return db('movies')
    }
}