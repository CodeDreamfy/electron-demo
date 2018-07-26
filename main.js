const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");

let mainWindow;
let onlineStatusWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1170,
    height: 800,
    title: "系统通知监测软件",
    // frame: false,
    minWidth: 800,
    minHeight: 600,
    autoHideMenuBar: true,
    titleBarStyle: "hiddenInset"
  });

  mainWindow.loadFile(path.resolve(__dirname, "./dist/index.html"));

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function() {
    mianWindow = null;
  });
}

app.on("ready", createWindow);

ipcMain.on("online-status-changed", (event, status) => {
  console.log(status);
});

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow == null) {
    createWindow();
  }
});
