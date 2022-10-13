
<h1 align="center">

  Progress-Bar
</h1>
<br/><br/>

## Description 
This progress bar is a simple website that can show your current progress and
can create Goals. All values needed, can be customized. 

If you have improvements, feel free to create a pull requests or open an issued.

<br/><br/>
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
<br/><br/>
## Installation (Windows, not officially supported)

Install nodejs and npm.
Now you have to Install all npm packages listed down below.
Next create txt Files listed in Install.sh
Next enter your wished Port in the app.js line 4.
The Admin Pasword is saved in saved_passwort.txt.
!!! The connection isnt encrypted out of the box, you may have to encrypt it or dont use your own password.
If you have node correctly set up run:
```
$ node app.js
```
otherwise [this might help](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
<br/><br/>
## Used dependencys
* nodeJs
* bootstrap
* jquery
<br/><br/>
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
