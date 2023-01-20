const { createTable } = require('../SQL-Querys/createTable.js');

const { insertProduct } = require('../SQL-Querys/insertProduct.js');
const { selectProduct } = require('../SQL-Querys/selectProduct.js');

createTable();

const prod =
{"name":"zapato", "price":5000, "image":"htttps..", "stock":5};

// insertProduct(prod);

select = async (param) => {
    const result = await selectProduct(param);
    console.log(result);
}

select('All');
