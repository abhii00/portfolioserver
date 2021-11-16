const express = require('express');
const cors = require('cors');

const myindoorgarden = require('./routes/myindoorgarden.js');
const eovisualiser = require('./routes/eovisualiser.js')

//initialise express app
const app = express();

//use cors
app.use(cors());

//routes
app.use('/eovisualiser', eovisualiser);
app.use('/myindoorgarden', myindoorgarden);

//output
app.listen(process.env.PORT, () => {
  console.log(`Backend running at http://localhost:5000.`)
})