const { DatabaseSync } = require('node:sqlite');

class DB {
    constructor() {
        this.db = new DatabaseSync(__dirname + "/mydb.sqlite");
    }
    createTradeTable() {
        let sql_trade =
            'CREATE TABLE Trade ('+
            'id  INTEGER PRIMARY KEY NOT NULL,'+
            'orderId INTEGER,' +
            'orderListId INTEGER, ' +
            'price TEXT, ' +
            'qty TEXT, ' +
            'quoteQty TEXT, ' +
            'commission TEXT, ' +
            'commissionAsset TEXT, ' +
            'time INTEGER,' +
            'isBuyer INTEGER, ' +
            'isMaker INTERGER, ' +
            'isBestMatch INTERGER, ' +
            'symbol TEXT' +

            ');';


        this.db.exec(sql_trade);
    }
    dropTradeTable() {
        let sql_trade ='drop TABLE Trade';

        this.db.exec(sql_trade);
    }

    createOrderTable() {
        let sql_table = 'CREATE TABLE MyOrder(' +
            'orderId  INT PRIMARY KEY NOT NULL,'+
            'price TEXT, ' +
            'qty TEXT, ' +
            'quoteQty TEXT, ' +
            'time INTERGER,' +
            'isBuyer INTERGER);'

        this.db.exec(sql_table);
    }
    dropOrderTable() {
        let sql_table = 'drop TABLE MyOrder';
        this.db.exec(sql_table);
    }
    insertTrade(id, orderId, orderListId, price, qty, quoteQty, commission, commissionAsset, time, isBuyer, isMaker, isBestMatch, symbol) {
        console.log('the paras is : ', id, orderId, orderListId, price, qty, quoteQty, commission, commissionAsset, time, isBuyer, isMaker, isBestMatch, symbol);
        let sqlStr = `INSERT INTO Trade(id, orderId, orderListId, price, qty, quoteQty, commission, commissionAsset, time, isBuyer, isMaker, isBestMatch, symbol) VALUES(${id}, ${orderId},${orderListId},${price},${qty},${quoteQty},${commission},'${commissionAsset}',${time},${isBuyer},${isMaker},${isBestMatch}, '${symbol}')`;
        console.log('sqlStr: ', sqlStr);
        this.db.exec(sqlStr);

    }
    insertMyOrder(orderId, price, qty, quoteQty, time, isBuyer) {
        let sqlStr = `INSERT INTO MyOrder VALUES(${orderId}, ${price},${qty},${quoteQty},${time}, ${isBuyer})`;
        this.db.exec(sqlStr);
    }
    findMyOrders() {
        let sql = 'SELECT * FROM MyOrder;'
        this.db.exec(sql);
    }
    findTrades() {
        let sql = "SELECT * FROM Trade;"
        let query = this.db.prepare(sql);
        let rows = query.all();
        return rows;


    }



}

module.exports = DB;
