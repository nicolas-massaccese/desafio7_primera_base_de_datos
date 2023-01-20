const { options } = require('../dbOptions/mariadb.js');
const knex = require('knex')(options);

const { existProduct } = require('../SQL-Querys/existProduct.js')

insertProduct  = async (newProduct) => {
    const exist = await existProduct(newProduct.name);

    if (exist ===0) {
        knex.from('products').insert(newProduct)
        .then(() => console.log(`INSERTED PRODUCT: ${JSON.stringify(newProduct)}`))
        .catch((err) => { console.log(err); throw err })
        .finally(() => { knex.destroy(); });
    } else {
        console.log(['THE PRODUCT ALREADY EXISTS. CANNOT RELOAD']);
    }
};

module.exports = { insertProduct };