const express = require('express');
const router = express.Router();

const test_garden = require('../assets/myindoorgarden/test_garden.json')

/* TODO setup mongoDB database to allow for myindoorgarden to save files */
/* TODO setup mongoDB upload AP for myindoorgarden */

router
  .get('/test', function(req, res){
    res.json(test_garden);
  })

module.exports = router;