const { options } = require('../dbOptions/sqlite3.js');
const knex = require('knex')(options);

selectMessages = async (idMsg) => {
    let msgFound = [];
    if (idMsg == 'ALL') {
    await knex.from('messages').select('*')
    .then((rows) => {
        msgFound = rows;
    })
    .catch((err) => { console.log(err); throw err })
    .finally(() => { knex.destroy(); });
    } else {
        await knex.from('messages').select('*').where('id_Msg', '=', `${idMsg}`)
        .then((rows) => {
            msgFound = rows;
        })
        .catch((err) => { console.log(err); throw err })
        .finally(() => { knex.destroy(); });
    }
    return msgFound;
};

module.exports = { selectMessages };