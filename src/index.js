const express = require('express');
const app = express();

var myindoorgarden = require('./routes/myindoorgarden.js');

app.use('/myindoorgarden', myindoorgarden);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(process.env.PORT, () => {
  console.log(`Backend running at http://localhost:5000.`)
})