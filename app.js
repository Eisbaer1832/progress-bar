const express = require('express')
const path = require('path')
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');

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
  let maxHöhe = JSON.stringify(req.body);
  let nmaxHöhe= maxHöhe.replace(/[^0-9 ]/g, "")
  console.log(nmaxHöhe)
  
  try {
    fs.writeFileSync(Object.keys({nmaxHöhe})+".txt", nmaxHöhe)
  } catch (err) {
    console.error(err)
  }

  try {  
    var data = fs.readFileSync(Object.keys({nmaxHöhe})+ ".txt");
    nmaxHöhe = data.toString()
    console.log("gelesene maxhöhe : " +nmaxHöhe)

  } catch(e) {
    console.log('Error:', e.stack);
  }
}


);




