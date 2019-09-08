const electron = require('electron');
const { ipcMain, app, globalShortcut} = electron;
const BrowserWindow = electron.BrowserWindow;
const generateSim = require('../scramble/scramble');
const { config, spawn } = require('threads');

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    icon: path.join(__dirname, 'assets/icon.png'),
  });
  if (isDev) {
    // mainWindow.webContents.openDevTools()
  }
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
}

function unregisterShortcut() {
  globalShortcut.unregister('CommandOrControl+X')
}

function registerShortcut() {
  globalShortcut.register('CommandOrControl+X', () => {
    thread.kill();
    unregisterShortcut();
  });
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

config.set({
  basepath : {
    node : __dirname + '/../scramble'
  }
});

let thread = null;

ipcMain.on('start-scramble', (event, scrambleOptions) => {
  registerShortcut();
  thread = spawn('worker.js')
  thread
    .send(scrambleOptions)
    .on('message', () => {
      unregisterShortcut();
    });
})
