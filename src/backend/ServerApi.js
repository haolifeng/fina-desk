

class ServerApi {
    constructor(){

    }
    start(sendmessagefun, callback) {
        this.sendmessagefun  = sendmessagefun;
        callback();

    }
    pingPong() {

    }
}


module.exports = ServerApi;