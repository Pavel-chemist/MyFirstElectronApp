const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const createWindow = () => {
  console.log('dirname: ', __dirname);

  const appWindow = new BrowserWindow({
    width: 1024,
    height: 512,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  ipcMain.handle('ping', () => 'QWER!!!');

  appWindow.loadFile('index.html');
};

app.whenReady().then(() => {
  console.log('application is ready');

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
