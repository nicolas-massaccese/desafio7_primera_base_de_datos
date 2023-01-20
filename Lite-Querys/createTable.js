const { options } = require('../dbOptions/sqlite3.js');
const knex = require('knex')(options);

function createTableMessages(){
    knex.schema.createTable('messages', table => {
        table.increments('id_msg');
        table.string('email');
        table.date('timestamp');
        table.string('message');
    })
    .then(() => console.log('Table Messages Created'))
    .catch(() => { console.log(err); throw err;})
    .finally(() => { knex.destroy(); })
};

module.exports = { createTableMessages };