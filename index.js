const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())


app.listen(port, () => {
    console.log('listening on port:', port)
})

app.get('/movies', (req, res) => {
    queries.listAllMovies().then(movies => {
        res.send(movies)
    })
})

app.get('/movies/:id', (req, res) => {
    queries.listMovieById(req.params.id).then(movie => {
        res.send(movie)
    })
})

app.post('/movies', (req, res) => {
    queries.createMovie(req.body).then(movie => {
        res.status(201).send(movie)
    })
})
app.put('/movies/:id', (req, res) => {
    queries.updateMovie(req.params.id, req.body).then(movie => {
        res.status(200).send(movie[0])
    })
})
app.delete('/movies/:id', (req, res) => {
    queries.deleteMovie(req.params.id).then(movie => {
        res.sendStatus(204)
    })
})