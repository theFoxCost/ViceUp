import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    frame: false,          
    webPreferences: {
      preload: path.join(process.cwd(), "preload.js"),
    },
  });

  if (isDev) {
    win.loadURL("http://localhost:5173");
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(process.cwd(), "dist/index.html"));
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("window:minimize", (e) => {
  BrowserWindow.fromWebContents(e.sender).minimize();
});

ipcMain.on("window:maximize", (e) => {
  const w = BrowserWindow.fromWebContents(e.sender);
  w.maximize();
});

ipcMain.on("window:unmaximize", (e) => {
  const w = BrowserWindow.fromWebContents(e.sender);
  w.unmaximize();
});

ipcMain.on("window:close", (e) => {
  BrowserWindow.fromWebContents(e.sender).close();
});

ipcMain.handle("window:isMaximized", (e) => {
  const w = BrowserWindow.fromWebContents(e.sender);
  return w.isMaximized();
});
