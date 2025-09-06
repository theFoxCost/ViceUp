import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

const isDev = !app.isPackaged;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    frame: false,       // custom titlebar (since you're handling window buttons yourself)
    show: false,        // hide until ready, prevents flicker
    webPreferences: {
      preload: path.join(process.cwd(), "preload.js"),
    },
  });

  // Load content
  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(process.cwd(), "dist/index.html"));
  }

  // Once ready, maximize and show
  mainWindow.once("ready-to-show", () => {
    mainWindow.maximize(); // Normal app fullscreen
    mainWindow.show();
  });
}

// App lifecycle
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// IPC for window controls
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
