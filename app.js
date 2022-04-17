const express = require('express')
const path = require('path')
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');
const { json } = require('express');
const favicon = require('serve-favicon');

app.use(express.json())
app.use(favicon(path.join(__dirname, '/', 'favicon.ico')));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/public',express.static('public'));

app.get('/', (_, res) => {
  res.sendFile('public/page/index.html', {root: __dirname })});

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
  console.log("name1" + lname1)
  res.send(lname1);
  
});


app.post('/public/sname2', function(req, res) {
  
  var lname2 = fs.readFileSync(("name2")+ ".txt")
  res.send(lname2);
  
});

app.post('/public/sname3', function(req, res) {
  
  var lname3 = fs.readFileSync(("name3")+ ".txt")
  res.send(lname3);
  
});

app.post('/public/sname4', function(req, res) {
  
  var lname4 = fs.readFileSync(("name4")+ ".txt")
  res.send(lname4);
  
});

app.post('/public/sname5', function(req, res) {
  
  var lname5 = fs.readFileSync(("name5")+ ".txt")
  res.send(lname5);
  
});

app.post('/public/sname6', function(req, res) {
  
  var lname6 = fs.readFileSync(("name6")+ ".txt")
  res.send(lname6);
});

app.post('/public/sheight1', function(req, res) {
  
  var lheight1 = fs.readFileSync(("height1")+ ".txt")
  res.send(lheight1);
    console.log("height1: "+lheight1)

});

app.post('/public/sheight2', function(req, res) {
  var lheight2 = fs.readFileSync(("height2")+ ".txt")
  res.send(lheight2);
  
});

app.post('/public/sheight3', function(req, res) {
  var lheight3 = fs.readFileSync(("height3")+ ".txt")
  res.send(lheight3);
  
});

app.post('/public/sheight4', function(req, res) {
  var lheight4 = fs.readFileSync(("height4")+ ".txt")
  res.send(lheight4);
  
});


app.post('/public/sheight5', function(req, res) {
  var lheight5 = fs.readFileSync(("height5")+ ".txt")
  res.send(lheight5);
  
});

app.post('/public/sheight6', function(req, res) {
  var lheight6 = fs.readFileSync(("height6")+ ".txt")
  res.send(lheight6);
  
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


/////////////////////////////
//                         //
//   ___  ______   _____   //
//  / __|/ _` \ \ / / _ \  //
//  \__ \ (_| |\ V /  __/  //
//  |___/\__,_| \_/ \___|  //
//                         //                                      
//                         //                                        
/////////////////////////////




app.post('/public/erledigt', function(req, res) {
  console.log("erledigt req.body: " + req.body.erledigt)
  var erledigt = req.body.erledigt;
  console.log("erledigt: " + erledigt);
  
  try {
    fs.writeFileSync(Object.keys({erledigt})+".txt", erledigt);
    console.log("erledigt: " + erledigt)
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/maxHoehe', function(req, res) {
  var maxHoehe = req.body.maxHoehe;
  console.log("maxHoehe: "+ maxHoehe);
  
  try {
    fs.writeFileSync(Object.keys({maxHoehe})+".txt", maxHoehe);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/name1', function(req, res) {
  var name1 = req.body.name1;
  console.log("name1: "+ name1 );

  
  try {
    fs.writeFileSync(Object.keys({name1})+".txt", name1);
  } catch (err) {
    console.error(err);
  };

});


app.post('/public/name2', function(req, res) {
  var name2 = req.body.name2;
  console.log("name2: "+ name2 );
  
  try {
    fs.writeFileSync(Object.keys({name2})+".txt", name2);
  } catch (err) {
    console.error(err);
  };

});


app.post('/public/name3', function(req, res) {
  var name3 = req.body.name3;
  console.log("name3: "+ name3 );
  
  try {
    fs.writeFileSync(Object.keys({name3})+".txt", name3);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/name4', function(req, res) {
  var name4 = req.body.name4;
  console.log("name4: "+ name4 );
  
  try {
    fs.writeFileSync(Object.keys({name4})+".txt", name4);
  } catch (err) {
    console.error(err);
  };

});


app.post('/public/name5', function(req, res) {
  var name5 = req.body.name5;
  console.log("name5: "+ name5 );
  
  try {
    fs.writeFileSync(Object.keys({name5})+".txt", name5);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/name6', function(req, res) {
  var name6 = req.body.name6;
  console.log("name6: "+ name6 );
  
  try {
    fs.writeFileSync(Object.keys({name6})+".txt", name6);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/height1', function(req, res) {
  var height1 = req.body.height1;
  console.log("height1: "+ height1 );
  
  try {
    fs.writeFileSync(Object.keys({height1})+".txt", height1);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/height2', function(req, res) {
  var height2 = req.body.height2;
  console.log("height2: "+ height2 );
  
  try {
    fs.writeFileSync(Object.keys({height2})+".txt", height2);
  } catch (err) {
    console.error(err);
  };

});



app.post('/public/height3', function(req, res) {
  var height3 = req.body.height3;
  console.log("height3: "+ height3 );
  
  try {
    fs.writeFileSync(Object.keys({height3})+".txt", height3);
  } catch (err) {
    console.error(err);
  };

});



app.post('/public/height4', function(req, res) {
  var height4 = req.body.height4;
  console.log("height4: "+ height4 );
  
  try {
    fs.writeFileSync(Object.keys({height4})+".txt", height4);
  } catch (err) {
    console.error(err);
  };

});


app.post('/public/height5', function(req, res) {
  var height5 = req.body.height5;
  console.log("height5: "+ height5 );
  
  try {
    fs.writeFileSync(Object.keys({height5})+".txt", height5);
  } catch (err) {
    console.error(err);
  };

});


app.post('/public/height6', function(req, res) {
  var height6 = req.body.height6;
  console.log("height6: "+ height6 );
  
  try {
    fs.writeFileSync(Object.keys({height6})+".txt", height6);
  } catch (err) {
    console.error(err);
  };

});




app.post('/public/currentgoal', function(req, res) {
  var currentgoal = req.body.currentgoal;
  console.log("currentgoal: "+ currentgoal );
  
  try {
    fs.writeFileSync(Object.keys({currentgoal})+".txt", currentgoal);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/currentgift', function(req, res) {
  var currentgift = req.body.currentgift;
  console.log("currentgift: "+ currentgift );
  
  try {
    fs.writeFileSync(Object.keys({currentgift})+".txt", currentgift);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/nochzutuen', function(req, res) {
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
});
