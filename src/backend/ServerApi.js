

class ServerApi {
    constructor(){

    }
    start(sendmessagefun, callback) {
        this.sendmessagefun  = sendmessagefun;
        callback();

    }
    pingPong(option, callback) {

        console.log('pingPong -- option: ', option);
        callback("no error", "I get you");

    }
}


module.exports = ServerApi;