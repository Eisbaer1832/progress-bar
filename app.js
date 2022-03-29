const express = require('express')
const path = require('path')
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');
const { json } = require('express');

app.use(express.json())

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/public',express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/page/index.html', {root: __dirname })});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});

app.post('/public/data', function(req, res) {
  let maxHoehe = req.body.maxHoehe;
  console.log("maxHoehe: "+ maxHoehe );
  
  try {
    fs.writeFileSync(Object.keys({maxHoehe})+".txt", maxHoehe);
  } catch (err) {
    console.error(err);
  };

});


app.post('/public/smaxhoehe1', function(req, res) {
    console.log("klappt")
    let maxHoehe = fs.readFileSync(("maxHoehe")+ ".txt")
    res.send(maxHoehe);

});


app.post('/public/shoehe', function(req, res) {
  console.log("klappt")
  let hoehe = fs.readFileSync(("hoehe")+ ".txt")
  res.send(hoehe);

});


app.post('/public/smaxHoehe2', function(req, res) {
  console.log("klappt")
  let maxHoehe2 = fs.readFileSync(("maxHoehe2")+ ".txt")
  res.send(maxHoehe2);

});

app.post('/public/sname1', function(req, res) {
  console.log("klappt")
  let name1 = fs.readFileSync(("name1")+ ".txt")
  res.send(name1);

});


app.post('/public/sname2', function(req, res) {
  console.log("klappt")
  let name2 = fs.readFileSync(("name2")+ ".txt")
  res.send(name2);

});

app.post('/public/sname3', function(req, res) {
  console.log("klappt")
  let name3 = fs.readFileSync(("name3")+ ".txt")
  res.send(name3);

});

app.post('/public/sname4', function(req, res) {
  console.log("klappt")
  let name4 = fs.readFileSync(("name4")+ ".txt")
  res.send(name4);

});

app.post('/public/sname5', function(req, res) {
  console.log("klappt")
  let name5 = fs.readFileSync(("name5")+ ".txt")
  res.send(name5);

});

app.post('/public/sname6', function(req, res) {
  console.log("klappt")
  let name6 = fs.readFileSync(("name6")+ ".txt")
  res.send(name6);

});

app.post('/public/sheight1', function(req, res) {
  console.log("klappt")
  let height1 = fs.readFileSync(("height1")+ ".txt")
  res.send(height1);

});

app.post('/public/sheight2', function(req, res) {
  console.log("klappt")
  let height2 = fs.readFileSync(("height2")+ ".txt")
  res.send(height2);

});

app.post('/public/sheight3', function(req, res) {
  console.log("klappt")
  let height3 = fs.readFileSync(("height3")+ ".txt")
  res.send(height3);

});

app.post('/public/sheight4', function(req, res) {
  console.log("klappt")
  let height4 = fs.readFileSync(("height4")+ ".txt")
  res.send(height4);

});


app.post('/public/sheight5', function(req, res) {
  console.log("klappt")
  let height5 = fs.readFileSync(("height5")+ ".txt")
  res.send(height5);

});

app.post('/public/sheight6', function(req, res) {
  console.log("klappt")
  let height6 = fs.readFileSync(("height6")+ ".txt")
  res.send(height6);

});

app.post('/public/serledigt', function(req, res) {
  console.log("klappt")
  let erledigt = fs.readFileSync(("erledigt")+ ".txt")
  res.send(erledigt);

});

app.post('/public/scurrentgoal', function(req, res) {
  console.log("klappt")
  let currentgoal = fs.readFileSync(("currentgoal")+ ".txt")
  res.send(currentgoal);

});

app.post('/public/snochzutuen', function(req, res) {
  console.log("klappt")
  let nochzutuen = fs.readFileSync(("nochzutuen")+ ".txt")
  res.send(nochzutuen);

});






app.post('/public/maxHoehe2', function(req, res) {
  let maxHoehe2 = req.body.maxHoehe2;
  console.log("maxHoehe2: "+ maxHoehe2 );
  
  try {
    fs.writeFileSync(Object.keys({maxHoehe2})+".txt", maxHoehe2);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/hoehe', function(req, res) {
  let hoehe = req.body.hoehe;
  console.log("hoehe: "+ hoehe );
  
  try {
    fs.writeFileSync(Object.keys({hoehe})+".txt", hoehe);
  } catch (err) {
    console.error(err);
  };

});


app.post('/public/name1', function(req, res) {
  let name1 = req.body.name1;
  console.log("name1: "+ name1 );
  
  try {
    fs.writeFileSync(Object.keys({name1})+".txt", name1);
  } catch (err) {
    console.error(err);
  };

});


app.post('/public/name2', function(req, res) {
  let name2 = req.body.name2;
  console.log("name2: "+ name2 );
  
  try {
    fs.writeFileSync(Object.keys({name2})+".txt", name2);
  } catch (err) {
    console.error(err);
  };

});


app.post('/public/name3', function(req, res) {
  let name3 = req.body.name3;
  console.log("name3: "+ name3 );
  
  try {
    fs.writeFileSync(Object.keys({name3})+".txt", name3);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/name4', function(req, res) {
  let name4 = req.body.name4;
  console.log("name4: "+ name4 );
  
  try {
    fs.writeFileSync(Object.keys({name4})+".txt", name4);
  } catch (err) {
    console.error(err);
  };

});


app.post('/public/name5', function(req, res) {
  let name5 = req.body.name5;
  console.log("name5: "+ name5 );
  
  try {
    fs.writeFileSync(Object.keys({name5})+".txt", name5);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/name6', function(req, res) {
  let name6 = req.body.name6;
  console.log("name6: "+ name6 );
  
  try {
    fs.writeFileSync(Object.keys({name6})+".txt", name6);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/height1', function(req, res) {
  let height1 = req.body.height1;
  console.log("height1: "+ height1 );
  
  try {
    fs.writeFileSync(Object.keys({height1})+".txt", height1);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/height2', function(req, res) {
  let height2 = req.body.height2;
  console.log("height2: "+ height2 );
  
  try {
    fs.writeFileSync(Object.keys({height2})+".txt", height2);
  } catch (err) {
    console.error(err);
  };

});



app.post('/public/height3', function(req, res) {
  let height3 = req.body.height3;
  console.log("height3: "+ height3 );
  
  try {
    fs.writeFileSync(Object.keys({height3})+".txt", height3);
  } catch (err) {
    console.error(err);
  };

});



app.post('/public/height4', function(req, res) {
  let height4 = req.body.height4;
  console.log("height4: "+ height4 );
  
  try {
    fs.writeFileSync(Object.keys({height4})+".txt", height4);
  } catch (err) {
    console.error(err);
  };

});


app.post('/public/height5', function(req, res) {
  let height5 = req.body.height5;
  console.log("height5: "+ height5 );
  
  try {
    fs.writeFileSync(Object.keys({height5})+".txt", height5);
  } catch (err) {
    console.error(err);
  };

});


app.post('/public/height6', function(req, res) {
  let height6 = req.body.height6;
  console.log("height6: "+ height6 );
  
  try {
    fs.writeFileSync(Object.keys({height6})+".txt", height6);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/erledigt', function(req, res) {
  let erledigt = req.body.erledigt;
  console.log("erledigt: "+ erledigt );
  
  try {
    fs.writeFileSync(Object.keys({erledigt})+".txt", erledigt);
    console.log(erledigt)
  } catch (err) {
    console.error(err);
  };

});


app.post('/public/currentgoal', function(req, res) {
  let currentgoal = req.body.currentgoal;
  console.log("currentgoal: "+ currentgoal );
  
  try {
    fs.writeFileSync(Object.keys({currentgoal})+".txt", currentgoal);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/nochzutuen', function(req, res) {
  let nochzutuen = req.body.nochzutuen;
  console.log("nochzutuen: "+ nochzutuen );
  
  try {
    fs.writeFileSync(Object.keys({nochzutuen})+".txt", nochzutuen);
  } catch (err) {
    console.error(err);
  };

});

