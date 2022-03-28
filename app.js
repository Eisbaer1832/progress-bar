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
  let maxHöhe = req.body.maxHöhe;
  console.log("maxHöhe: "+ maxHöhe );
  
  try {
    fs.writeFileSync(Object.keys({maxHöhe})+".txt", maxHöhe);
  } catch (err) {
    console.error(err);
  };

});

app.post('/public/smaxmoehe', function(req, res) {
    console.log("klappt")
    let maxHöhe = fs.readFileSync(("maxHöhe")+ ".txt")
    console.log("gelesene maxhöhe : " +maxHöhe)
    res.json(maxHöhe);

});
