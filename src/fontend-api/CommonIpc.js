const ipcRenderer = window.electron.ipcRenderer;//
const remote = window.electron.remote;//
const url = require('url');

class CommonIpc {
    sendMsg(msgtype, data, callback) {
        ipcRenderer.once(msgtype + '-reply', (event,replymsg)=>{
            callback(replymsg.error,replymsg.result);
        });
        ipcRenderer.send(msgtype, data);
    }
    registerMsgHandle(msgtype,callback){
        ipcRenderer.on(msgtype, callback);
    }
}


export default CommonIpc;