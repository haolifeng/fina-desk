const ipcMain = require('electron').ipcMain;

const msgtype = require('../common/msgtype');
const ServerApi = require('./ServerApi');

const serverApi = new ServerApi();

function registerMsgHandle(msgtype,handle,self){
    ipcMain.on(msgtype, (event, arg) => {

        handle.call(self,arg, (err, result) => {
            event.sender.send(msgtype+'-reply', { error: err, result: result });
        })
    });
}


function  registerAllMsgHandler () {
    registerMsgHandle(msgtype.PING_PONG, serverApi.pingPong, serverApi);
}


function init(win) {
    serverapi.start((msgtype, data,callback) => {
        let contents = win.webContents;
        contents.send(msgtype, data);
        if(callback){
            ipcMain.on(msgtype+'-reply-to-server',callback);
        }},registerAllMsgHandler);
};

module.exports = init;
