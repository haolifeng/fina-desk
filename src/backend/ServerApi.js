

class ServerApi {
    constructor(){

    }
    start(sendmessagefun, callback) {
        this.sendmessagefun  = sendmessagefun;
        callback();

    }
    pingPong(option, callback) {

        this.sendmessagefun()

    }
}


module.exports = ServerApi;