const ipcMain = require('electron').ipcMain;

const msgtype = require('../common/msgtype');
const ServerApi = require('./ServerApi');

const serverApi = new ServerApi();

function registerMsgHandle(msgtype,handle,self){
    ipcMain.on(msgtype, (event, arg) => {

        handle.call(self,arg, (err, result) => {
            self.webContents.send(msgtype+'-reply', err, result);
        })
    });
}


function  registerAllMsgHandler () {
    registerMsgHandle(msgtype.PING_PONG, serverApi.pingPong, serverApi);
}


function init(win) {
    serverApi.start(win,registerAllMsgHandler);
};

module.exports = init;
