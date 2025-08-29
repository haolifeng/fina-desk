

class ServerApi {
    constructor(){

    }
    start(webContents, callback) {
        this.webContents  = webContents;
        callback();

    }
    pingPong(option, callback) {

        console.log('pingPong -- option: ', option);
        callback("no error", "I get you");

    }
}


module.exports = ServerApi;