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
  console.log(`App listening on port ${port}!`)
});


  

app.post('/public/data', function(req, res) {
  let maxHöhe = req.body;
  console.log("maxHöhe: "+maxHöhe );
  res.redirect('/');
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


