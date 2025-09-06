const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  close: () => ipcRenderer.send("window:close"),
  minimize: () => ipcRenderer.send("window:minimize"),
  maximize: () => ipcRenderer.send("window:maximize"),
  unmaximize: () => ipcRenderer.send("window:unmaximize"),
  isMaximized: () => ipcRenderer.invoke("window:isMaximized"),
});
