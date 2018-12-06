const enviorment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')
const configENV = config[enviorment]
const knex = require('knex')
const connection = knex(configENV)

module.exports = connection