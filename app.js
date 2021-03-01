const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");

let appWindow;

function createWindow() {
    appWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false,
        frame: false
    });

    appWindow.loadFile(path.join(__dirname, `dist/index.html`));

    // appWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function () {
    if (win === null) {
        initWindow();
    }
})
