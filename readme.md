
<h1 align="center">
  <br>
  <br>
  Progress-Bar
  <br>
</h1>

## Description 
This progress bar is a simple website that can show your current progress and
can create Goals. All values needed, can be customized. 

If you have improvements, feel free to create a pull requests or open an issued.


## Installation (Linux only)
Install nodejs and npm.
```
$ sudo bash install.sh
```
Just follow the instructions given by the script.
Next enter your wished Port in the app.js line 4.
If you want to use it on a webser setup a reverse Proxy.
```
$ echo "YOURPASSWORD" >> password.txt
```
The connection isnt encrypted out of the box, you may want to encrypt it or dont use your own password.

Finally just run 
```
$ node app.js 
```

## Installation (Windows, not officially supported)

Install nodejs and npm.
Now you have to Install all npm packages listed down below.
Next create txt Files listed in Install.sh
Next enter your wished Port in the app.js line 4.
The Admin Pasword is saved in saved_passwort.txt.
!!! The connection is`nt encrypted out of the box, you may have to encrypt it or don`t use your own password.
If you have node correctly set up run:
```
$ node app.js
```
otherwise [tis might help](ttps://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)

## Used dependencys
* nodeJs
* bootstrap
* jquery

### Npm packages
    express 
    io
    jquery
    jsdom 
    mysql 
    router
    socket.io
    supervisor
    serve-favicon
