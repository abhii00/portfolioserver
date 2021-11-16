const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');

router
  .get('/satellite-tle', function(req, res){
      fetch('https://celestrak.com/NORAD/elements/gp.php?GROUP=ACTIVE&FORMAT=TLE')
      .then(r => r.text())
      .then(text => res.text(text))
  })

module.exports = router;