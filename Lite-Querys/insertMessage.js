const { options } = require('../dbOptions/sqlite3.js');
const knex = require('knex')(options);

insertMessage  = async (newMsg) => {
    await knex.from('message').insert(newMsg)
    .then(() => console.log(`INSERTED MESSAGE: ${JSON.stringify(newMsg)}`))
    .catch((err) => { console.log(err); throw err })
    .finally(() => { knex.destroy(); });
};

module.exports = { insertMessage };