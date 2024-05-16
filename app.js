const express = require('express')
const path = require('path')
const app = express();
const port = 1951;
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


app.post('/public/smaxhoehe', function(req, res) {
    var lmaxHoehe = fs.readFileSync(("maxHoehe")+ ".txt")
    res.send(lmaxHoehe);
    
});


app.post('/public/sgoalpassed', function(req, res) {
  var lgoalpassed = fs.readFileSync(("goalpassed")+ ".txt")
  res.send(lgoalpassed);
  
});

app.post('/public/saved_passwort', function(req, res) {
  var lsaved_passwort = fs.readFileSync(("saved_passwort")+ ".txt")
  res.send(lsaved_passwort);
  
});

app.post('/public/shoehe', function(req, res) {
  var lhoehe = fs.readFileSync(("hoehe")+ ".txt")
  res.send(lhoehe);
});


app.post('/public/sname1', function(req, res) {
  var lname1 = fs.readFileSync(("name1")+ ".txt")
  res.send(lname1);
  
});


app.post('/public/sheight1', function(req, res) {
  
  var lheight1 = fs.readFileSync(("height1")+ ".txt")
  res.send(lheight1);
});


app.post('/public/serledigt', function(req, res) {
  var lerledigt = fs.readFileSync(("erledigt")+ ".txt")
  res.send(lerledigt);
  
});

app.post('/public/scurrentgoal', function(req, res) {
  var lcurrentgoal = fs.readFileSync(("currentgoal")+ ".txt")
  res.send(lcurrentgoal);
  
});

app.post('/public/scurrentgift', function(req, res) {
  var lcurrentgift = fs.readFileSync(("currentgift")+ ".txt")
  res.send(lcurrentgift);
  
});

app.post('/public/snochzutuen', function(req, res) {
  var lnochzutuen = fs.readFileSync(("nochzutuen")+ ".txt")
  res.send(lnochzutuen);
  
});

app.post('/public/lsavetime', function(req, res) {
  var lsavetime = fs.readFileSync(("savetime")+ ".txt")
  res.send(lsavetime);
  
});


app.post('/public/slogs', function(req, res) {
  var llogs = fs.readFileSync("logs.txt")
  res.send(llogs); 
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
  console.log(logs)
  var logs = req.body.logs;
  fs.appendFileSync("logs.txt", logs + "\n");
});

app.post('/public/goalpassed', function(req, res) {
  var goalpassed = req.body.goalpassed;
    fs.writeFileSync("goalpassed.txt", goalpassed);
});

app.post('/public/erledigt', function(req) {
  console.log("erledigt req.body: " + req.body.erledigt)
  var erledigt = req.body.erledigt;
  
  try {
    fs.writeFileSync(Object.keys({erledigt})+".txt", erledigt);
    console.log("erledigt: " + erledigt)
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/savetime', function(req) {
  console.log("savetime req.body: " + req.body.savetime)
  var savetime = req.body.savetime;
  console.log("savetime: " + savetime);
  
  try {
    fs.writeFileSync(Object.keys({savetime})+".txt", savetime);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/maxHoehe', function(req) {
  var maxHoehe = req.body.maxHoehe;
  console.log("maxHoehe: "+ maxHoehe);
  
  try {
    fs.writeFileSync(Object.keys({maxHoehe})+".txt", maxHoehe);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/name1', function(req,res) {
  var name1 = req.body.name1;
  console.log("name1: "+ name1 );

  
  try {
    fs.writeFileSync(Object.keys({name1})+".txt", name1);
  } catch (err) {
    console.error(err);
  };
  res.send(name1);

});


app.post('/public/height1', function(req) {
  var height1 = req.body.height1;
  console.log("height1: "+ height1 );
  
  try {
    fs.writeFileSync(Object.keys({height1})+".txt", height1);
  } catch (err) {
    console.error(err);
  };

});



app.post('/public/currentgift', function(req) {
  var currentgift = req.body.currentgift;
  console.log("currentgift: "+ currentgift );
  
  try {
    fs.writeFileSync(Object.keys({currentgift})+".txt", currentgift);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/nochzutuen', function(req) {
  var nochzutuen = req.body.nochzutuen;
  console.log("nochzutuen: "+ nochzutuen );
  
  try {
    fs.writeFile (Object.keys({nochzutuen})+".txt", nochzutuen);
  } catch (err) {
    console.error(err);
  };
});

app.post('/public/hoehe', function(req, res) {
  var hoehe = req.body.hoehe;
  console.log("hoehe: "+ hoehe);
  try {
    fs.writeFileSync(Object.keys({hoehe})+".txt", hoehe);
  } catch (err) {
    console.error(err);
  };
  res.send(hoehe);
});
