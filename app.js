const express = require('express')
const path = require('path')
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/public',express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/page/index.html', {root: __dirname })});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});



app.post('./data', function(req, res) {
  var reqData = req.body;
  console.log("maxHöhe: "+reqData );
});

function save(){
  try {
    fs.writeFileSync(Object.keys({maxHöhe})+".txt", maxHöhe)
  } catch (err) {
    console.error(err)
  }
}

function read(){
try {  
    var data = fs.readFileSync(Object.keys({maxHöhe})+ ".txt");
    maxHöhe = data.toString()
    console.log(maxHöhe)

  } catch(e) {
    console.log('Error:', e.stack);
  }
}


