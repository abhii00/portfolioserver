const express = require('express');
const cors = require('cors');

var myindoorgarden = require('./routes/myindoorgarden.js');

const app = express();

app.use(cors());

app.use('/myindoorgarden', myindoorgarden);

app.listen(process.env.PORT, () => {
  console.log(`Backend running at http://localhost:5000.`)
})