let electron = require('electron')
let {app, BrowserWindow } = electron

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 1300, height: 700})
    mainWindow.loadURL("file://"+__dirname+'/src/index.html')
    mainWindow.webContents.openDevTools()
})
