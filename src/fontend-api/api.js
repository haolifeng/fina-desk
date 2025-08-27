import CommonIpc from "./CommonIpc";
import msgtype from "../common/msgtype";
class FontEndApi {
    constructor() {
        this.ipc = new CommonIpc();

    }
    registerMessageHandle(msgtype,callback){
        this.ipc.registerMsgHandle(msgtype,callback);
    }
}

let fontendApi = new FontEndApi();

export default  fontendApi;