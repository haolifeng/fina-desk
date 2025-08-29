

class FontEndApi {
    constructor() {}
     pingPoin(params, callback) {
         window.electronAPI.pingPong(params);
        window.electronAPI.onPingPong(callback);
    }

}

let fontendApi = new FontEndApi();

export default  fontendApi;