const { contextBridge, ipcRenderer  } = require('electron/renderer')



contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
});
contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title),
  pingPong:(data)=> ipcRenderer.send('ping-pong', data)
})