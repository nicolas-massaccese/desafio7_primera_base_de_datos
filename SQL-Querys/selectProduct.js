const { options } = require('../dbOptions/mariadb.js');
const knex = require('knex')(options);

selectProduct = async (idProd) => {
    let prodFound = [];
    if (idProd == 'ALL') {
    await knex.from('products').select('*')
    .then((rows) => {
        prodFound = rows;
    })
    .catch((err) => { console.log(err); throw err })
    .finally(() => { knex.destroy(); });
    } else {
        await knex.from('proucts').select('*').where('id_prod', '=', `${idProd}`)
        .then((rows) => {
            prodFound = rows;
        })
        .catch((err) => { console.log(err); throw err })
        .finally(() => { knex.destroy(); });
    }
    return prodFound;
};

module.exports = { selectProduct };