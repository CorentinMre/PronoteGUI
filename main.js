//dependencies
const electron = require('electron')
const path = require('path')
const url = require('url')
//app
const app = electron.app

//first window
const BrowserWindow = electron.BrowserWindow


let mainWindow

function createWindow () {

  //first window settings
  let WINDOW_WIDTH = 1350;
  let WINDOW_HEIGHT = 760;
  let bounds = electron.screen.getPrimaryDisplay().bounds;
  let x = bounds.x + ((bounds.width - WINDOW_WIDTH) / 2);
  let y = bounds.y + ((bounds.height - WINDOW_HEIGHT) / 2);

  //creation of the first window (connexion pronote)
  mainWindow = new BrowserWindow({width: WINDOW_WIDTH, height: WINDOW_HEIGHT, x: x, y: y, resizable: false})
  //clear the menu bar
  mainWindow.setMenu(null);
  //show developer mode
  //mainWindow.webContents.openDevTools();


  //load login page
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname,'/gui/login.html'),
    protocol: 'file:',
    slashes: true
  }))



  //if the application is closed the window closes
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {

    app.quit()
})

app.on('activate', function () {

  if (mainWindow === null) {
    createWindow()
  }
})



