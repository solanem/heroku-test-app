// Update with your config settings.
// from tutorial https://www.youtube.com/watch?v=wfrn21E2NaU
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
