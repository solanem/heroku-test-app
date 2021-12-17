const knex = require('knex');
const knexfile = require('./knexfile');

// inject here real db or mock data
const db = knex(knexfile.development);
module.exports = db;