const express = require('express');
const app = express();
const port = 3000;

var myindoorgarden = require('./routes/myindoorgarden.js');

app.use('/myindoorgarden', myindoorgarden);

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}.`)
})