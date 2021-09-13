const express = require('express');
const app = express();

var myindoorgarden = require('./routes/myindoorgarden.js');

app.use('/myindoorgarden', myindoorgarden);

app.listen(process.env.PORT, () => {
  console.log(`Backend running at http://localhost:5000.`)
})