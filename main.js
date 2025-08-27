const { app, BrowserWindow } = require('electron')
const path = require('path')

const url = require('url')
const isDev = require('electron-is-dev');

const backendInit = require('./src/backend/backendInit');



function createWindow () {
    console.log('preload: ', path.join(__dirname, './public/render.js'))
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // integration Nodejs
            nodeIntegrationInWorker: true,
            webSecurity: false,
            preload: path.join(__dirname, './preload.js')
        }
    })

    backendInit(mainWindow);
    let pathdd = url.format({
        pathname: path.join(__dirname, './build/index.html'),
        protocol: 'file:',
        slashes: true
    })
    mainWindow.loadURL(pathdd);
    mainWindow.loadURL(pathdd)

    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    })
/*
    if (isDev) {
        // 開發階段直接與 React 連線
        mainWindow.loadURL('http://localhost:3000/');
        // 開啟 DevTools.
        mainWindow.webContents.openDevTools()
    } else {
        // 產品階段直接讀取 React 打包好的
        mainWindow.loadFile('./build/index.html');
    }

 */
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})