const express = require('express')
const path = require('path')
const app = express();
const port = 3000;
const fs = require('fs');

app.use('/public',express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/page/index.html', {root: __dirname })});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

