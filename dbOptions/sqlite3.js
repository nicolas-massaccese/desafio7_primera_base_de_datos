const path = require('path');

const DBSOURCE = path.join(__dirname, '../DBlite/mydb.sqlite');

const options = {
    client: 'sqlite3',
    connection: {
    filname: DBSOURCE,
    },
    useNullAsDefault: true,
};

module.exports = { options };
