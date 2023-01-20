const { createTable } = require('../Lite-Querys/createTable.js');

const { insertMessage } = require('../Lite-Querys/insertMessage.js');
const { selectMessage } = require('../Lite-Querys/selectMessage.js');

createTable();

let time = new Date();

const msg =[
    {"email":"pepe@hotmail.com", "timestamp":`${time}`, "message":"Hello!!!"},
    {"email":"quico@hotmail.com", "timestamp":`${time}`, "message":"Bye, bye"}
];

insertMessage(msg);

// select = async (param) => {
//     const result = await selectMessage(param);
    
//     result.forEach(element => {
//         console.log(element.name);
//     });
// };

// select('All');
