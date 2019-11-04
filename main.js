"use strict";
// // Modules to control application life and create native browser window
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var mongoose = require('mongoose');
var path = require('path');
var url = require('url');
var userModel = require('./models/user.model');
var userModel1 = require('./models/al.model');
// // Keep a global reference of the window object, if you don't, the window will
// // be closed automatically when the JavaScript object is garbage collected.
// tslint:disable-next-line: one-variable-per-declaration
var win, serve;
var args = process.argv.slice(1);
serve = args.some(function (val) { return val === '--serve'; });
// connect to mongodb
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// ipc communication
// register page
electron_1.ipcMain.on('registerUser', function (event, arg) {
    console.log(arg);
    var user = new userModel(arg);
    user.save(function (err, product) {
        if (err) {
            win.webContents.send('registerUserResponse', {
                error: err
            });
        }
        else {
            win.webContents.send('registerUserResponse', {
                status: 200
            });
        }
    });
});
electron_1.ipcMain.on('popupUser', function (event, arg) {
    console.log(arg);
    var user = new userModel1(arg);
    // tslint:disable-next-line: only-arrow-functions
    user.save(function (err, product) {
        if (err) {
            win.webContents.send('popupUserResponse', {
                error: err
            });
        }
        else {
            win.webContents.send('popupUserResponse', {
                status: 200
            });
        }
    });
});
// login verification
electron_1.ipcMain.on('checkUser', function (event, arg) {
    var user = new userModel(arg);
    userModel.findOne({
        email: user.email, password: user.password
    }, function (err, res) {
        if (res) {
            // res.json({ message: 'User Found' });
            console.log('user found');
        }
        else {
            // res.json({ message: 'User Not Found' });
            console.log('user not found');
        }
        console.log(err, res);
    });
});
function createWindow() {
    // Create the browser window.
    win = new electron_1.BrowserWindow({
        width: 1366,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            backgroundThrottling: false
        }
    });
    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/dist/electron-poc/index.html"),
        protocol: 'file:',
        slashes: true
    }));
    // and load the index.html of the app.
    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(__dirname + "/node_modules/electron")
        });
        win.loadURL('http://localhost:4200');
    }
    else {
        win.loadFile('./dist/electron-poc/index.html');
    }
    // Open the DevTools.
    // win.webContents.openDevTools();
    // Emitted when the window is closed.
    win.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}
// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
electron_1.app.on('ready', createWindow);
// // Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code.You can also put them in separate files and require them here.
//# sourceMappingURL=main.js.map