const DB = require('../src/backend/db/DB');
const db = new DB();

let cursor = db.findTrades();
//console.log('cursor: ', cursor);

for(let i=0; i< cursor.length; i++) {
    console.log(cursor[i].orderId);
}