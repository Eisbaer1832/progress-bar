const express = require('express')
const path = require('path')
const app = express();
const port = 1952;
const fs = require('fs');
const bodyParser = require('body-parser');
const { json } = require('express');
const favicon = require('serve-favicon');
var $ = require('jquery');

app.use(express.json())
app.use(favicon(path.join(__dirname, '/', 'favicon.ico')));


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/public',express.static('public'));

app.get('/', (_, res) => {
  res.sendFile('public/page/index.html', {root: __dirname })});

app.get('/statistics', (_, res) => {
  res.sendFile('public/page/statistics.html', {root: __dirname })});

app.get


app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});




/////////////////////////////
//                         //
//                         //
//  | | ___   __ _  __| |  //
//  | |/ _ \ / _` |/ _` |  //
//  | | (_) | (_| | (_| |  //
//  |_|\___/ \__,_|\__,_|  //
//                         //                                      
//                         //                                        
/////////////////////////////
app.post('/public/data', function(req, res) {
  let data = JSON.parse(fs.readFileSync("db.json", 'utf8'))
  console.log(data)
  res.send(data);

});

app.post('/public/loadlogs', function(req, res) {
  console.log(fs.readFileSync("logs.txt"))
  var logs = fs.readFileSync("logs.txt")
  res.send(logs); 
});
/////////////////////////////
//                         //
//   ___  ______   _____   //
//  / __|/ _` \ \ / / _ \  //
//  \__ \ (_| |\ V /  __/  //
//  |___/\__,_| \_/ \___|  //
//                         //                                      
//                         //                                        
/////////////////////////////

app.post('/public/logs', function(req, res) {
  var logs = req.body.logs;
  fs.appendFileSync("logs.txt", logs + "\n");
});

app.post('/public/savedata', function(req, res) {
  fs.writeFileSync("db.json", req.body.data);
});
