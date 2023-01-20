const { options } = require('../dbOptions/mariadb.js');
const knex = require('knex')(options);

function createTableProducts(){
    knex.schema.createTable('productos', table => {
        table.increments('id_prod');
        table.string('name');
        table.float('price');
        table.string('image');
        table.integer('stock');
    })
    .then(() => console.log('Table Products Created'))
    .catch(() => { console.log(err); throw err;})
    .finally(() => { knex.destroy(); })
};

module.exports = { createTableProducts };