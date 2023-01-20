const { options } = require('../dbOptions/mariadb.js');
const knex = require('knex')(options);

existProduct  = async (nombre) => {
    let exist;

    await knex.from('products').select('*').where('name', '=', `${nombre}`)
    .then((rows) => {
        exist = rows.length;
    })
    .catch((err) => { console.log(err); throw err })
    .finally(() => { knex.destroy(); });
    return exist;
};

module.exports = { existProduct };