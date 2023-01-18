const knex  = require('knex');

const dbClient = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        database: 'ecommerce',
    },
});

module.exports = { dbClient };
