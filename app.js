const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    autoHideMenuBar: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

 // ipcMain.handle('create-file', (req, data) => {
 //   if (!data || !data.title || !data.content) return;
 // })
  
  // Open the developer tools.
  win.webContents.openDevTools();

  // and load the index.html of the app.
  //win.loadFile('src/index.html')
  win.loadFile('src/screens/menu-screen/index.html')
}

app.whenReady().then(createWindow)