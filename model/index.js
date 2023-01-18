const { dbClient } = require("../config/connectToDb");

const createTable = async () => {
    try{
        await dbClient.schema.dropTableIfExists('articles');
        console.log('Table deleted (if existed)');
        await dbClient.schema.createTable('articles', table => {
            table.string('name', 15).notNullable();
            table.string('code', 10).notNullable();
            table.float('price');
            table.integer('stock');
        });

        console.log('table created');

    } catch (err){
        console.error('something reallly wrong happened!', err.message);
    } finally {
        dbClient.destroy();
    }
};

module.exports = { createTable };