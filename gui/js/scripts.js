//dependencies
const electron = require('electron');
let {PythonShell} = require('python-shell');
const path = require('path')
let ent = require(path.join(__dirname, '../ent.json'));

const BrowserWindow = electron.remote.BrowserWindow;

//to be able to implement cookies later
let session = electron.remote.session;

let mainWindow;

function createWindow () {


  //second window settings
  let WINDOW_WIDTH = 1575;
  let WINDOW_HEIGHT = 865;
  let bounds = electron.screen.getPrimaryDisplay().bounds;
  let x = bounds.x + ((bounds.width - WINDOW_WIDTH) / 2);
  let y = bounds.y + ((bounds.height - WINDOW_HEIGHT) / 2);

  
  //to send the values ​​of the user entered on the login window
  var user = document.getElementById("user").value;
  var passwd = document.getElementById("passwd").value;
  var function_on_ent_py = ent["function_on_ent_py"];

  //python script options
  var options = {
    scriptPath : path.join(__dirname, '../engine/'),
    args : [user,passwd,function_on_ent_py]
  }


  

  //script execution to get account cookies, cookies are of type string in the "message" variable
  let pyshell = new PythonShell('ent.py', options);
  pyshell.on('message', function(message) {
  
  //transform cookies from type srting to type dict
  let cook = eval('(' + message + ')');

  //hide the first window
  electron.remote.getCurrentWindow().hide()

  //creation of the second window (pronote)
  mainWindow = new BrowserWindow({width: WINDOW_WIDTH, height: WINDOW_HEIGHT, x: x, y: y, resizable: false,webPreferences: {nodeIntegration: false},});
  //clear the menu bar
  mainWindow.setMenu(null);
  //implement cookies to the app
  for (const [key, value] of Object.entries(cook)) {
    session.defaultSession.cookies.set({url: ent["cookiesUrl"] , name : key, value: value,secure:true},err=>{
      if(err) console.log("Err "+err)

    })}
  //load the student's pronote url
  mainWindow.loadURL(ent["pronoteUrl"]); 
  //if the application is closed all windows close
  mainWindow.on('closed', function () {
    //closing windows
    window.close()
  })})

}

function login(){

  //creation of the second window (pronote), its execution is done as soon as the user clicks on "se connecter" on the login page
  createWindow();

}

